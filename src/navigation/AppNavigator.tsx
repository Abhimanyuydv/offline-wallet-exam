import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { logout } from '../store/authSlice';


export const AppNavigator = () => {
  const dispatch = useDispatch();
  const { token, expiresAt, isBootstrapping } = useSelector(
    (state: RootState) => state.auth
  );

  // Auto-logout when token expires
  useEffect(() => {
    if (!token || !expiresAt) {
      return;
    }

    const now = Date.now();
    const remaining = expiresAt - now;

    // If already expired, logout immediately
    if (remaining <= 0) {
      dispatch(logout());
      return;
    }

    const timeoutId = setTimeout(() => {
      dispatch(logout());
    }, remaining);

    return () => clearTimeout(timeoutId);
  }, [token, expiresAt, dispatch]);

  if (isBootstrapping) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
    </SafeAreaView>
  );
};
