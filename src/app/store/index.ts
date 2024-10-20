import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@/entities/user/slices/userSlice';
import { userApi } from '@/entities/user/api/userApi';
import rouletteSlice from '@/games/roulette/slice/rouletteSlice';
import rouletteSpinSlice from '@/games/roulette/slice/rouletteSpinSlice';
import walletApi from '@/entities/wallet/api/walletApi';
import walletSlice from '@/entities/wallet/slices/walletSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer,
    [walletApi.reducerPath]: walletApi.reducer,
    roulette: rouletteSlice,
    rouletteSpin: rouletteSpinSlice,
    wallet: walletSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
