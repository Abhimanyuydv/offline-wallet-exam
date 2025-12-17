import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createTransaction } from '../services/transactionService';
import NetInfo from '@react-native-community/netinfo';
import { useAutoSync } from '../hooks/useAutoSync';
import { syncPendingTransactions } from '../services/syncService';


const WalletScreen = () => {
  const [amount, setAmount] = useState('');

  useAutoSync();

  const onPay = async () => {
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      Alert.alert('Enter valid amount');
      return;
    }

    // 1️⃣ Create transaction locally
    createTransaction(numericAmount);

    // 2️⃣ If online → sync immediately
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      syncPendingTransactions();
    }
    Alert.alert('Payment initiated');
    setAmount('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Amount"
        placeholderTextColor="gray"
        style={{ borderWidth: 1, marginVertical: 10 }}
      />

      <Button title="Pay" onPress={onPay} />
    </View>
  );
};

export default WalletScreen;
