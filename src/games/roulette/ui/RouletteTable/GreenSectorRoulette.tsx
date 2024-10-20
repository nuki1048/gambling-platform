import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { twMerge } from 'tailwind-merge';
import {
  selectActiveNumber,
  selectCurrentBet,
  setActiveNumber,
} from '../../slice/rouletteSlice';
import { useState } from 'react';
import { getIcon } from '../../shared/utils/iconUtils';

export const GreenSectorRoulette = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const dispatch = useAppDispatch();
  const [hover, setHover] = useState(false);

  const icon = getIcon(currentBet);

  const isActive = activeNumber === 0;

  const handleClick = (value: number | null) => {
    if (!currentBet) {
      return;
    }
    dispatch(setActiveNumber(value));
  };
  return (
    <div
      className={twMerge(
        `w-[54px] h-[150px] bg-greenSector bg-center bg-cover bg-white bg-no-repeat relative`,
        isActive && 'bg-yellow-300',
        hover && 'bg-yellow-300'
      )}
      style={{
        clipPath: 'polygon(0 48%, 100% 100%, 100% 0)',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        handleClick(0);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        handleClick(null);
      }}
    >
      <div
        className='relative bg-[#2A6A2C] w-[47px] h-[128px] z-10 bottom-[-10px] right-[-4px]'
        style={{
          clipPath: 'polygon(0 48%, 100% 100%, 100% 0)',
        }}
      ></div>
      <div className='z-10 absolute top-[40%] right-[35%]'>0</div>
      {isActive && icon && (
        <img
          src={icon}
          alt='bet50'
          width={40}
          height={40}
          className='absolute top-[50px] left-[11px] z-10'
        />
      )}
    </div>
  );
};
