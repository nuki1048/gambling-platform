import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import React, { useEffect } from 'react';
import {
  selectSlotCurrentBet,
  selectSlotLifecycle,
  selectSlotWinOrLose,
  selectWinBet,
  SlotLifecycle,
  WinOrLose,
} from '../../slices/slotSlice';
import { setBalance } from '../../../../entities/wallet/slices/walletSlice';
import useSound from 'use-sound';
import soundEffectLose from '../../../../assets/sounds/mixkit-melodic-bonus-collect-1938.wav';
import soundEffectWin from '../../../../assets/sounds/mixkit-magical-coin-win-1936.mp3';
type Props = {
  children: React.ReactNode;
};

const BalanceProvider = ({ children }: Props) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const isPlaying = lifecycle === SlotLifecycle.PLAY;
  const isInfo = lifecycle === SlotLifecycle.INFO;
  const dispatch = useAppDispatch();
  const win = useAppSelector(selectSlotWinOrLose);
  const isWin = win === WinOrLose.WIN;
  const currentBet = useAppSelector(selectSlotCurrentBet);
  const winBet = useAppSelector(selectWinBet);
  const [playLose] = useSound(soundEffectLose);
  const [playWin] = useSound(soundEffectWin);
  useEffect(() => {
    if (isPlaying) {
      dispatch(setBalance(isWin ? currentBet * winBet : -currentBet));
    }

    if (isInfo) {
      if (isWin) {
        playWin();
      } else {
        playLose();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lifecycle]);
  return <>{children}</>;
};

export default BalanceProvider;
