import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import React, { useEffect } from 'react';
import {
  clearRoulette,
  RouletteLifecycle,
  RouletteWinOrLose,
  selectActiveColor,
  selectActiveNumber,
  selectCurrentBet,
  selectRouletteLifecycle,
  selectWinBetByColor,
  selectWinBetByNumber,
  setRouletteLifecycle,
  setRouletteWinOrLose,
} from '../../slice/rouletteSlice';
import {
  clearRouletteSpin,
  selectCurrentNumber,
} from '../../slice/rouletteSpinSlice';
import { setBalance } from '@/entities/wallet/slices/walletSlice';
import { ROULETTE_TABLE_NUMBERS } from '../../ui/RouletteTable/initData';

type Props = {
  children: React.ReactNode;
};

const GameSceneActionsProvider = ({ children }: Props) => {
  const currentNumber = useAppSelector(selectCurrentNumber);
  const activeNumber = useAppSelector(selectActiveNumber);
  const activeColor = useAppSelector(selectActiveColor);
  const lifecycleStatus = useAppSelector(selectRouletteLifecycle);
  const currentBet = useAppSelector(selectCurrentBet);
  const winBetByNumber = useAppSelector(selectWinBetByNumber);
  const winBetByColor = useAppSelector(selectWinBetByColor);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lifecycleStatus !== RouletteLifecycle.FINISHED) return;

    const isUserWinByNumber = currentNumber === activeNumber;
    const isWinByColor =
      ROULETTE_TABLE_NUMBERS.find((item) => item.number === currentNumber)
        ?.color === activeColor;

    if (!activeNumber && isWinByColor) {
      // Win case by color

      dispatch(setBalance(currentBet * winBetByColor - currentBet));
    } else if (currentNumber === activeNumber) {
      // Win case by number
      dispatch(setBalance(currentBet * winBetByNumber - currentBet));
    } else {
      dispatch(setBalance(-currentBet));
    }
    dispatch(setRouletteLifecycle(RouletteLifecycle.INFO));
    dispatch(
      setRouletteWinOrLose(
        isUserWinByNumber || isWinByColor
          ? RouletteWinOrLose.WIN
          : RouletteWinOrLose.LOSE
      )
    );
  }, [
    currentBet,
    dispatch,
    lifecycleStatus,
    activeNumber,
    winBetByNumber,
    currentNumber,
    activeColor,
    winBetByColor,
  ]);

  useEffect(() => {
    if (lifecycleStatus !== RouletteLifecycle.INFO) return;

    const lifeTimeout = setTimeout(() => {
      dispatch(setRouletteLifecycle(RouletteLifecycle.READY_TO_START));
      dispatch(setRouletteWinOrLose(null));
      dispatch(clearRoulette());
      dispatch(clearRouletteSpin());
    }, 2000);

    return () => clearTimeout(lifeTimeout);
  }, [dispatch, lifecycleStatus]);

  return <>{children}</>;
};
export default GameSceneActionsProvider;
