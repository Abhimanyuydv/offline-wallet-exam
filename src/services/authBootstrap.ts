import { getAuth, clearAuth } from '../storage/secureStorage';
import { restoreAuth, finishBootstrap, logout } from '../store/authSlice';

export const bootstrapAuth = async (dispatch: any) => {
  const auth = await getAuth();

  if (!auth) {
    dispatch(finishBootstrap());
    return;
  }

  if (Date.now() > auth.expiresAt) {
    await clearAuth();
    dispatch(logout());
    dispatch(finishBootstrap());
    return;
  }

  dispatch(restoreAuth(auth));
  dispatch(finishBootstrap());
};
