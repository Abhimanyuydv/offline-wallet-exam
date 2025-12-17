export const payApi = async (amount: number) => {
    await new Promise((res: any) => setTimeout(res, 1000));
  
    if (amount <= 1000) {
      return { success: true };
    } else {
      throw new Error('Payment failed');
    }
  };
  