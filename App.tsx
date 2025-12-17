import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/store';
import { AppNavigator } from './src/navigation/AppNavigator';
import { bootstrapAuth } from './src/services/authBootstrap';
import { initDB } from './src/storage/db';
import ErrorBoundary from './src/components/ErrorBoundary';

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initDB();
    bootstrapAuth(dispatch);
  }, [dispatch]);

  return <AppNavigator />;
};

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <ErrorBoundary>
        <Root />
      </ErrorBoundary>
    </SafeAreaProvider>
  </Provider>
);

export default App;
