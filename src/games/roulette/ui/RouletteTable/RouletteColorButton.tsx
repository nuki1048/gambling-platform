import { twMerge } from 'tailwind-merge';
import { getIcon } from '../../shared/utils/iconUtils';

interface Props {
  color: string;
  handleContextMenu: () => void;
  number: number;
  handleClick: (number: number) => void;
  currentBet: number;
  isActive: boolean;
}

export const RouletteColorButton = ({
  color,
  handleClick,
  handleContextMenu,
  number,
  currentBet,
  isActive,
}: Props) => {
  const icon = getIcon(currentBet);
  return (
    <div
      className={twMerge(
        'relative w-[50px] h-[50px] text-white flex items-center justify-center border border-solid border-white text-xl font-medium cursor-pointer hover:border-yellow-400 hover:border-2',
        color === 'red' && 'bg-red-600',
        color === 'black' && 'bg-black',
        isActive && 'border-yellow-400 border-2'
      )}
      data-color={color}
      data-number={number}
      onClick={() => {
        handleClick(number);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        handleContextMenu();
      }}
    >
      {isActive && icon && (
        <img
          src={icon}
          alt='bet50'
          width={40}
          height={40}
          className='absolute top-[3px] left-[50%] -translate-x-2/4	 t z-10'
        />
      )}
      {number}
    </div>
  );
};
