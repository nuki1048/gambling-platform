import SlotsGameScene from './scene/GameScene';
import titleImg from '../../assets/slots/main-icon.png';
import soundBg from '../../assets/sounds/jazz-background-music-bar-restaurant-casino-mafia-whiskey-249670.mp3';
import { useEffect } from 'react';
import useSound from 'use-sound';

const CoreGameSlots = () => {
  const [play] = useSound(soundBg, {
    volume: 0.5,
    loop: true,
  });

  useEffect(() => {
    play();
  }, [play]);
  return (
    <div>
      <div className='absolute left-[50%] translate-x-[-50%] z-10 top-[160px]'>
        <img src={titleImg} width={338} height={111} />
      </div>
      <SlotsGameScene />
    </div>
  );
};

export default CoreGameSlots;
