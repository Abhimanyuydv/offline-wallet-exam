import EncryptedStorage from 'react-native-encrypted-storage';

export const saveAuth = async (data: {
  token: string;
  expiresAt: number;
}) => {
  await EncryptedStorage.setItem('auth', JSON.stringify(data));
};

export const getAuth = async () => {
  const res = await EncryptedStorage.getItem('auth');
  return res ? JSON.parse(res) : null;
};

export const clearAuth = async () => {
  await EncryptedStorage.removeItem('auth');
};
