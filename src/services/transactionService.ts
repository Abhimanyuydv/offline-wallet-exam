import { db } from '../storage/db';
import { TRANSACTION_STATUS } from '../utilis/constants';
import { Transaction as SQLiteTransaction } from 'react-native-sqlite-storage';

// Generate a unique ID compatible with React Native
const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`;
};

export const createTransaction = (amount: number) => {
  const id = generateId();
  const createdAt = Date.now();
  

  db.transaction((tx: SQLiteTransaction) => {
    tx.executeSql(
      `INSERT INTO transactions
       (id, amount, status, synced, retryCount, createdAt)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        id,
        amount,
        TRANSACTION_STATUS.PENDING,
        0,
        0,
        createdAt,
      ]
    );
  });

  return id;
};
