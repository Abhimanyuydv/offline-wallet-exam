import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import { db } from '../storage/db';

type Transaction = {
  id: string;
  amount: number;
  status: string;
  createdAt: number;
};

// Generate 100 dummy transactions in-memory
const generateDummyTransactions = (): Transaction[] => {
  const statuses = ['SUCCESS', 'PENDING', 'FAILED'];
  const now = Date.now();

  return Array.from({ length: 100 }).map((_, index) => {
    const amount = Math.floor(Math.random() * 9000) + 100; // 100 - 9100
    const status = statuses[index % statuses.length];
    const createdAt = now - index * 60 * 60 * 1000; // each 1 hour apart

    return {
      id: `tx-${index + 1}`,
      amount,
      status,
      createdAt,
    };
  });
};

const TransactionsScreen = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // On first load, try to get real transactions from DB.
    // If there are none, fall back to showing 100 dummy transactions.
    db.transaction((tx: any) => {
      tx.executeSql(
        `SELECT * FROM transactions ORDER BY createdAt DESC`,
        [],
        (_: any, result: any) => {
          const rows: Transaction[] = [];
          for (let i = 0; i < result.rows.length; i++) {
            rows.push(result.rows.item(i));
          }

          if (rows.length === 0) {
            const dummyData = generateDummyTransactions();
            setTransactions(dummyData);
          } else {
            setTransactions(rows);
          }
        },
        (error: any) => {
          console.log('Failed to load transactions', error);
          return false;
        },
      );
    });
  }, []);

  // Memoized data to avoid unnecessary re-renders
  const data = useMemo(() => transactions, [transactions]);

  // Optimized item renderer
  const renderItem = useCallback(
    ({ item }: { item: Transaction }) => (
      <View style={styles.item}>
        <Text style={styles.amount}>₹{item.amount}</Text>
        <Text>Status: {item.status}</Text>
        <Text>{new Date(item.createdAt).toLocaleString()}</Text>
      </View>
    ),
    [],
  );

  // Tell FlatList the height of each row for faster virtualization
  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: 56, // approximate item height
      offset: 56 * index,
      index,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <Text>No transactions yet</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          windowSize={10}
          removeClippedSubviews
          getItemLayout={getItemLayout}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  amount: {
    fontWeight: 'bold',
  },
});
