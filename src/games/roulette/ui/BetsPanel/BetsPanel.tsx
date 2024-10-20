import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  selectCurrentBet,
  setCurrentBet,
} from '@/games/roulette/slice/rouletteSlice';
import { BETS } from '../RouletteTable/initData';
import Bet from './Bet';
import { selectWalletBalance } from '@/entities/wallet/slices/walletSlice';
import { toast } from 'react-toastify';

const BetsPanel = () => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectWalletBalance);
  const currentBet = useAppSelector(selectCurrentBet);

  const handleClick = (value: number) => {
    if (balance < value || currentBet + value > balance) {
      toast.error('Not enough balance');
      return;
    }
    dispatch(setCurrentBet(value));
  };
  return (
    <div className='flex justify-center items-center gap-4 w-[380px] h-[78px] no-repeat bg-center bg-cover bg-bets-panel'>
      {BETS.map(({ value, background }) => (
        <Bet
          key={value}
          background={background}
          bet={value}
          onPickBet={handleClick}
        />
      ))}
    </div>
  );
};

export default BetsPanel;
