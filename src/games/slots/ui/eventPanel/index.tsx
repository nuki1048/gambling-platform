import { FC } from 'react';
import {
  SlotLifecycle,
  WinOrLose,
  selectSlotCurrentBet,
  selectSlotLifecycle,
  selectSlotWinOrLose,
  startSlot,
} from '../../slices/slotSlice';
import winImage from '../../../../assets/slots/bigWin.png';
import loseImage from '../../../../assets/slots/tryAgain.png';
import spinText from '../../../../assets/slots/spin.png';
import buttonImage from '../../../../assets/slots/button.svg';
import handleImage from '../../../../assets/slots/handle.png';
import { twMerge } from 'tailwind-merge';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { toast } from 'react-toastify';

const SlotEventPanel: FC = () => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const winOrLose = useAppSelector(selectSlotWinOrLose);
  const currentBet = useAppSelector(selectSlotCurrentBet);

  const isReadyToStart = lifecycle === SlotLifecycle.READY_TO_START;
  const dispatch = useAppDispatch();
  const onStart = () => {
    if (!currentBet) {
      toast.error('You need to choose a bet first!');
      return;
    }
    dispatch(startSlot());
  };
  return (
    <div className='flex flex-col justify-between h-[300px] w-[150px]'>
      <div>
        {lifecycle === SlotLifecycle.INFO && (
          <div>
            {winOrLose === WinOrLose.WIN && <img src={winImage} />}
            {winOrLose !== WinOrLose.WIN && <img src={loseImage} />}
          </div>
        )}
      </div>
      <div
        onClick={onStart}
        className={twMerge('relative', isReadyToStart && 'cursor-pointer')}
      >
        {isReadyToStart && (
          <div className='absolute left-[45%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20'>
            <img src={spinText} />
          </div>
        )}
        <img src={buttonImage} className='z-10 relative' />
        <img className='absolute right-[85%] bottom-0' src={handleImage} />
      </div>
    </div>
  );
};

export default SlotEventPanel;
