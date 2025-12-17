import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { syncPendingTransactions } from '../services/syncService';

export const useAutoSync = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        syncPendingTransactions();
      }
    });

    return unsubscribe;
  }, []);
};
