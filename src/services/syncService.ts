import { db } from '../storage/db';
import { payApi } from '../api/paymentApi';
import { TRANSACTION_STATUS } from '../utilis/constants';
import { Transaction as SQLiteTransaction } from 'react-native-sqlite-storage';
import { TransactionRow } from '../storage/db';

export const syncPendingTransactions = async () => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx: SQLiteTransaction) => {
      tx.executeSql(
        `SELECT * FROM transactions WHERE synced = 0`,
        [],
        async (_: any, result: any) => {
          const rows = result.rows;
          const pendingTransactions: TransactionRow[] = [];

          // Collect all pending transactions
          for (let i = 0; i < rows.length; i++) {
            pendingTransactions.push(rows.item(i) as TransactionRow);
          }

          // Process transactions sequentially
          for (const txItem of pendingTransactions) {
            try {
              await payApi(txItem.amount);
              await markSuccess(txItem.id);
            } catch (error) {
              await markFailed(txItem.id, txItem.retryCount);
            }
          }

          resolve();
        },
        (_: any, error: any) => {
          console.error('Error fetching pending transactions:', error);
          reject(error);
        }
      );
    });
  });
};

const markSuccess = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLiteTransaction) => {
      tx.executeSql(
        `UPDATE transactions
         SET status = ?, synced = 1
         WHERE id = ?`,
        [TRANSACTION_STATUS.SUCCESS, id],
        () => resolve(),
        (_: any, error: any) => {
          console.error('Error marking transaction as success:', error);
          reject(error);
        }
      );
    });
  });
};

const markFailed = (id: string, currentRetryCount: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLiteTransaction) => {
      tx.executeSql(
        `UPDATE transactions
         SET status = ?, retryCount = ?
         WHERE id = ?`,
        [TRANSACTION_STATUS.FAILED, currentRetryCount + 1, id],
        () => resolve(),
        (_: any, error: any) => {
          console.error('Error marking transaction as failed:', error);
          reject(error);
        }
      );
    });
  });
};
