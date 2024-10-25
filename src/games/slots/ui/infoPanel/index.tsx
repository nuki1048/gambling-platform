import { useAppSelector } from '../../../../app/store/hooks';
import {
  selectSlotCurrentBet,
  selectSlotLifecycle,
  SlotLifecycle,
} from '../../slices/slotSlice';
import { selectWalletBalance } from '../../../../entities/wallet/slices/walletSlice';
import { useEffect, useState } from 'react';
import balanceIcon from '../../../../assets/slots/balanceIcon.svg';
import betIcon from '../../../../assets/slots/betIcon.svg';

const SlotsInfoPanel = () => {
  const currentBet = useAppSelector(selectSlotCurrentBet);
  const balance = useAppSelector(selectWalletBalance);
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const [displayedBalance, setDisplayedBalance] = useState(balance);

  useEffect(() => {
    if (lifecycle === SlotLifecycle.INFO) {
      setDisplayedBalance(balance);
    }
  }, [balance, lifecycle]);
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-slots-event-panel bg-center bg-cover bg-no-repeat w-[250px] h-[54px] flex justify-center items-center relative'>
        <img src={balanceIcon} className='absolute left-[-30px]' />
        <div className='text-white text-[35px]'>{displayedBalance ?? 0}</div>
      </div>
      <div className='bg-slots-event-panel bg-center bg-cover bg-no-repeat w-[250px] h-[54px] flex justify-center items-center relative'>
        <img src={betIcon} className='absolute left-[-30px]' />

        <div className='text-white text-[35px]'>{currentBet}</div>
      </div>
    </div>
  );
};

export default SlotsInfoPanel;
