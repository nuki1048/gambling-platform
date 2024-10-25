import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { toast } from 'react-toastify';
import Bet from './Bet';
import {
  selectSlotCurrentBet,
  setSlotCurrentBet,
} from '../../slices/slotSlice';
import { selectWalletBalance } from '@/entities/wallet/slices/walletSlice';
import leftPenny from '@/assets/slots/left-penny.svg';
import rightPenny from '@/assets/slots/right-penny.svg';
enum BetType {
  Bet50 = 'bg-bet-bg-50',
  Bet100 = 'bg-bet-bg-100',
  Bet200 = 'bg-bet-bg-200',
  Bet400 = 'bg-bet-bg-400',
  Bet800 = 'bg-bet-bg-800',
}

const BETS = [
  {
    value: 50,
    background: BetType.Bet50,
  },
  {
    value: 100,
    background: BetType.Bet100,
  },
  {
    value: 200,
    background: BetType.Bet200,
  },
  {
    value: 400,
    background: BetType.Bet400,
  },
  {
    value: 800,
    background: BetType.Bet800,
  },
];

const SlotBetsPanel = () => {
  const dispatch = useAppDispatch();
  const currentBet = useAppSelector(selectSlotCurrentBet);
  const balance = useAppSelector(selectWalletBalance);
  const handleClick = (value: number) => {
    if (balance < value || currentBet + value > balance) {
      toast.error('Not enough balance');
      return;
    }
    dispatch(setSlotCurrentBet(value));
  };
  return (
    <div className='flex gap-4 no-repeat items-center justify-center bg-center bg-cover bg-slots-bets w-[383px] h-[80px] relative'>
      <img src={leftPenny} className='absolute left-[-60px]' />
      {BETS.map(({ value, background }) => (
        <Bet
          background={background}
          bet={value}
          onPickBet={handleClick}
          key={value}
        />
      ))}
      <img src={rightPenny} className='absolute right-[-60px]' />
    </div>
  );
};

export default SlotBetsPanel;
