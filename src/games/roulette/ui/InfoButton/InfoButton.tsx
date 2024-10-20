import infoIcon from '@/assets/roulette/infoIcon.svg';
import infoBox from '@/assets/roulette/infoBox.svg';
import { useState } from 'react';

export const InfoButton = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setShowInfo(true);
      }}
      onMouseLeave={() => {
        setShowInfo(false);
      }}
      className='relative'
    >
      <img src={infoIcon} alt='info' />

      <div
        className='absolute w-[200px] left-[-50px] bottom-[-70px]'
        hidden={!showInfo}
      >
        <img src={infoBox} alt='infoBox' />
      </div>
    </div>
  );
};
