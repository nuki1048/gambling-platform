import { useAppSelector } from '@/app/store/hooks';
import {
  selectActiveColor,
  selectActiveNumber,
  selectCurrentBet,
} from '../../slice/rouletteSlice';
import background from '@/assets/roulette/info-bets-bg.svg';
import { Id, INFO_PANEL_ITEMS } from '../RouletteTable/initData';
import { selectWalletBalance } from '@/entities/wallet/slices/walletSlice';
import { ScoreWindow } from '../../shared/ScoreWindow/ScoreWindow';
import { selectCurrentNumber } from '../../slice/rouletteSpinSlice';

const InfoPanel = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const currentNumber = useAppSelector(selectCurrentNumber);
  const activeColor = useAppSelector(selectActiveColor);
  const balance = useAppSelector(selectWalletBalance);

  const getValueOfItem = (id: Id) => {
    switch (id) {
      case 'balance':
        return balance;
      case 'winBet':
        return currentNumber;
      case 'currentBet':
        return currentBet;
      case 'activeNumber':
        return activeNumber ? activeNumber : activeColor;
      default:
        return '';
    }
  };

  return (
    <div className='grid grid-cols-4 justify-between px-10'>
      {INFO_PANEL_ITEMS.map(({ id, title }) => (
        <ScoreWindow
          key={id}
          id={id}
          title={title}
          value={getValueOfItem(id)}
          background={background}
        />
      ))}
    </div>
  );
};

export default InfoPanel;
