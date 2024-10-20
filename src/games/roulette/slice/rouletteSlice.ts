import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export enum RouletteLifecycle {
  READY_TO_START = 'start',
  PLAY = 'play',
  FINISHED = 'finished',
  INFO = 'info',
}

export enum RouletteWinOrLose {
  WIN = 'win',
  LOSE = 'lose',
}

export enum RouletteColor {
  RED = 'red',
  BLACK = 'black',
  GREEN = 'green',
}

interface InitalState {
  lifecycle: `${RouletteLifecycle}`;
  activeNumber: number | null;
  currentBet: number;
  activeColor: `${RouletteColor}` | null;
  readonly winBetByNumber: number;
  readonly winBetByColor: number;
  winOrLose: `${RouletteWinOrLose}` | null;
}

const initialState: InitalState = {
  lifecycle: RouletteLifecycle.READY_TO_START,
  activeNumber: null,
  currentBet: 0,
  activeColor: null,
  winBetByColor: 2,
  winBetByNumber: 36,
  winOrLose: null,
};

const rouletteSlice = createSlice({
  name: 'rouletteSclice',
  initialState,
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number | null>) => {
      state.activeNumber = action.payload;
    },
    setCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload < 0) {
        state.currentBet = 0;
      } else {
        state.currentBet += action.payload;
      }
    },
    setActiveColor: (state, action: PayloadAction<RouletteColor | null>) => {
      state.activeColor = action.payload;
    },
    setRouletteLifecycle: (state, action: PayloadAction<RouletteLifecycle>) => {
      state.lifecycle = action.payload;
    },
    setRouletteWinOrLose: (
      state,
      action: PayloadAction<RouletteWinOrLose | null>
    ) => {
      state.winOrLose = action.payload;
    },
    clearRoulette: (state) => {
      state.activeNumber = null;
      state.activeColor = null;
      state.currentBet = 0;
      state.winOrLose = null;
    },
  },
});

export const selectActiveNumber = (state: RootState) =>
  state.roulette.activeNumber;

export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;

export const selectActiveColor = (state: RootState) =>
  state.roulette.activeColor;

export const selectWinBetByNumber = (state: RootState) =>
  state.roulette.winBetByNumber;

export const selectWinBetByColor = (state: RootState) =>
  state.roulette.winBetByColor;
export const selectRouletteLifecycle = (state: RootState) =>
  state.roulette.lifecycle;

export const selectRouletteWinOrLose = (state: RootState) =>
  state.roulette.winOrLose;

export const {
  setActiveNumber,
  setCurrentBet,
  setActiveColor,
  setRouletteLifecycle,
  setRouletteWinOrLose,
  clearRoulette,
} = rouletteSlice.actions;

export default rouletteSlice.reducer;
