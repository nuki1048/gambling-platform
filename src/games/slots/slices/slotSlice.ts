import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export enum SlotLifecycle {
  READY_TO_START = 'READY_TO_START',
  PLAY = 'PLAY',
  STOPPING = 'STOPPING',
  STOP = 'STOP',
  INFO = 'INFO',
}

export interface ISlotRow {
  id: number;
  activeItemID: number;
}

export enum WinOrLose {
  WIN = 'WIN',
  LOSE = 'LOSE',
}

interface ISlot {
  lifecycle: `${SlotLifecycle}`;
  rows: ISlotRow[];
  winOrLose?: `${WinOrLose}` | null;
  currentBet: number;
  readonly winBet: number;
}

const initialState: ISlot = {
  lifecycle: SlotLifecycle.READY_TO_START,
  rows: [
    {
      id: 1,
      activeItemID: 7,
    },
    {
      id: 2,
      activeItemID: 7,
    },
    {
      id: 3,
      activeItemID: 7,
    },
  ],
  winOrLose: null,
  currentBet: 0,
  winBet: 10,
};

const slotSlice = createSlice({
  name: 'slot',
  initialState,
  reducers: {
    setLifecycle: (state, action: PayloadAction<SlotLifecycle>) => {
      state.lifecycle = action.payload;
    },
    startSlot: (state) => {
      state.lifecycle = SlotLifecycle.PLAY;
      state.rows = state.rows.map((row) => ({
        ...row,
        activeItemID: Math.ceil(Math.random() * 16),
      }));
      const activeItemID = state.rows.map((item) => item.activeItemID);

      const win = activeItemID.every((item, _, arr) => item === arr[0]);
      state.winOrLose = win ? WinOrLose.WIN : WinOrLose.LOSE;
    },
    setSlotCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload < 0) {
        state.currentBet = 0;
      } else {
        state.currentBet += action.payload;
      }
    },
  },
});

export const { setLifecycle, startSlot, setSlotCurrentBet } = slotSlice.actions;

export const selectSlotLifecycle = (state: RootState) => state.slot.lifecycle;

export const selectSlotRows = (state: RootState) => state.slot.rows;
export const selectSlotCurrentBet = (state: RootState) => state.slot.currentBet;
export const selectSlotWinOrLose = (state: RootState) => state.slot.winOrLose;
export const selectWinBet = (state: RootState) => state.slot.winBet;

export default slotSlice.reducer;
