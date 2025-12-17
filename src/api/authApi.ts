export const loginApi = async (username: string, password: string) => {
  await new Promise((res: any) => setTimeout(res, 1000));

  return {
    token: 'mock_token_123',
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
  };
};
