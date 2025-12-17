import SQLite, { Transaction as SQLiteTransaction } from 'react-native-sqlite-storage';

// Shape of a row in the `transactions` table
export type TransactionRow = {
  id: string;
  amount: number;
  status: string;
  synced: number;
  retryCount: number;
  createdAt: number;
};

export const db = SQLite.openDatabase(
  { name: 'wallet.db', location: 'default' },
  () => {},
  (error: any) => console.log(error),
);

export const initDB = () => {
  db.transaction((tx: SQLiteTransaction) => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS transactions (
        id TEXT PRIMARY KEY,
        amount REAL,
        status TEXT,
        synced INTEGER,
        retryCount INTEGER,
        createdAt INTEGER
      );
    `);
  });
};
