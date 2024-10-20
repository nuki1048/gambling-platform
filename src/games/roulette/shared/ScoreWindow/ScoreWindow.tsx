import { Id } from '../../ui/RouletteTable/initData';
import { BalanceIcon } from '../icons/BalanceIcon';
import { BetIcon } from '../icons/BetIcon';
import { BetNumberIcon } from '../icons/BetNumberIcon';
import { WinIcon } from '../icons/WinIcon';

interface ScoreWindowProps {
  id: Id;
  title: string;
  value: number | string | null;
  background: string;
}

export const ScoreWindow: React.FC<ScoreWindowProps> = ({
  background,
  id,
  title,
  value,
}) => {
  const getIconOfValue = (id: Id) => {
    switch (id) {
      case 'balance':
        return <BalanceIcon />;
      case 'winBet':
        return <WinIcon />;
      case 'currentBet':
        return <BetIcon />;
      case 'activeNumber':
        return <BetNumberIcon />;
      default:
        return '';
    }
  };
  return (
    <div
      key={id}
      className='relative flex justify-center items-center w-[223px] h-[60px] no-repeat bg-center bg-cover'
      style={{ background: `url('${background}') ` }}
    >
      <div className='absolute top-[-15px] left-0 text-xs text-[#A0B9A2CC]'>
        {title}
      </div>
      <div className='text-[35px]'>{value}</div>
      <div className='absolute right-[-35px]'>{getIconOfValue(id)}</div>
    </div>
  );
};
