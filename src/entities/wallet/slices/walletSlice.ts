import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { Wallet } from '../model/Wallet';

const initialState: Wallet = {
  game_balance: 5000,
};

export const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.game_balance += action.payload;
    },
  },
});

export const { setBalance } = wallet.actions;

export const selectWalletBalance = (state: RootState) =>
  state.wallet.game_balance;

export default wallet.reducer;
