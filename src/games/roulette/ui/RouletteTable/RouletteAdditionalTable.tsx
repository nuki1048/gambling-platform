import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  RouletteColor,
  selectActiveColor,
  selectActiveNumber,
  selectCurrentBet,
  setActiveColor,
} from '../../slice/rouletteSlice';
import { twJoin } from 'tailwind-merge';
import { getIcon } from '../../shared/utils/iconUtils';
import useSound from 'use-sound';
import soundNumber from '@/assets/sounds/roulette/number.mp3';
import { toast } from 'react-toastify';
export const RouletteAdditionalTable = () => {
  const [play] = useSound(soundNumber);
  const activeColor = useAppSelector(selectActiveColor);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const dispatch = useAppDispatch();

  const onClick = (color: RouletteColor) => {
    if (!currentBet) {
      toast.error('You need choose a bet first!');
      return;
    }
    play();
    dispatch(setActiveColor(color));
  };

  const isActiveBlack = activeColor === RouletteColor.BLACK;
  const isActiveRed = activeColor === RouletteColor.RED;
  const icon = getIcon(currentBet);
  return (
    <div className='flex flex-col'>
      <div
        className={twJoin(
          'relative w-[50px] h-[75px] text-white flex items-center justify-center border border-solid border-white text-xl font-medium cursor-pointer hover:border-yellow-400 hover:border-2  bg-red-600',
          isActiveRed && !activeNumber && 'border-yellow-400 border-2'
        )}
        data-color={RouletteColor.RED}
        onClick={() => {
          onClick(RouletteColor.RED);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          play();
          dispatch(setActiveColor(null));
        }}
      >
        {isActiveRed && !activeNumber && icon && (
          <img
            src={icon}
            alt='bet50'
            width={40}
            height={40}
            className='absolute top-[25%] left-[50%] -translate-x-2/4	 t z-10'
          />
        )}
      </div>
      <div
        className={twJoin(
          'relative w-[50px] h-[75px] text-white flex items-center justify-center border border-solid border-white text-xl font-medium cursor-pointer hover:border-yellow-400 hover:border-2  bg-black',
          isActiveBlack && !activeNumber && 'border-yellow-400 border-2'
        )}
        onClick={() => {
          onClick(RouletteColor.BLACK);
        }}
        data-color={RouletteColor.BLACK}
        onContextMenu={(e) => {
          e.preventDefault();
          play();
          dispatch(setActiveColor(null));
        }}
      >
        {isActiveBlack && !activeNumber && icon && (
          <img
            src={icon}
            alt='bet50'
            width={40}
            height={40}
            className='absolute top-[25%] left-[50%] -translate-x-2/4	 t z-10'
          />
        )}
      </div>
    </div>
  );
};
