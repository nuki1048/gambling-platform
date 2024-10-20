import { RootState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const ROULETTE_NUMBERS = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

interface RouletteSpinState {
  readonly rouletteNumbers: number[];
  readonly stepCircle: number;
  speed: number;
  rotationInProcess: boolean;
  degreesRoutationRoulette: number;
  currentNumber: number | null;
}

const initialState: RouletteSpinState = {
  rouletteNumbers: ROULETTE_NUMBERS,
  stepCircle: 360 / ROULETTE_NUMBERS.length,
  speed: 0,
  rotationInProcess: false,
  degreesRoutationRoulette: 0,
  currentNumber: null,
};

const rouletteSpinSlice = createSlice({
  name: 'rouletteSpinSlice',
  initialState,
  reducers: {
    setRouletteSpeed: (state, action: PayloadAction<number | null>) => {
      const speed = action.payload;
      if (speed === 0) {
        state.rotationInProcess = false;
        state.speed = 0;
      } else {
        state.speed = state.speed - state.speed / 150;
      }
    },
    setRouletteStartSpeed: (state) => {
      const randomSpeed = 1 + Math.random() * 0.1;

      state.speed = randomSpeed;
      state.rotationInProcess = true;
    },
    setRouletteSpinDegreeesRotation: (state, action: PayloadAction<number>) => {
      state.degreesRoutationRoulette = action.payload;
      const deltaIndex = Math.floor(
        (action.payload + state.stepCircle / 2) / state.stepCircle
      );
      const currentIndex = state.rouletteNumbers.length - deltaIndex;

      state.currentNumber = state.rouletteNumbers[currentIndex];

      state.rotationInProcess = false;
    },
    clearRouletteSpin: (state) => {
      state.currentNumber = null;
    },
  },
});

export const {
  setRouletteSpeed,
  setRouletteStartSpeed,
  setRouletteSpinDegreeesRotation,
  clearRouletteSpin,
} = rouletteSpinSlice.actions;

export const selecteRouletteSpinSpeed = (state: RootState) =>
  state.rouletteSpin.speed;

export const selectRotationRouletteInProgress = (state: RootState) =>
  state.rouletteSpin.rotationInProcess;

export const selectCurrentNumber = (state: RootState) =>
  state.rouletteSpin.currentNumber;

export default rouletteSpinSlice.reducer;
