import RouletteSpinPX from '@/games/roulette/pixi/rouletteSpin/RouletteSpinPX';
import GameSceneUI from './GameSceneUI';
import { Stage } from '@/app/config/contextBridge';
import GameSceneActionsProvider from './GameSceneActionsProvider';
import { BGPX } from '../../pixi/bgPX/bgPX';
import soundBg from '@/assets/sounds/roulette/bg.mp3';
import { useEffect } from 'react';
import useSound from 'use-sound';
const [width, height] = [1150, 500];

const RouletteGameScene = () => {
  const [play] = useSound(soundBg, {
    volume: 0.5,
    loop: true,
  });

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div
      className='flex flex-col items-center justify-center w-full h-full 
'
    >
      <GameSceneActionsProvider>
        <GameSceneUI>
          <Stage width={width} height={height}>
            <BGPX />
            <RouletteSpinPX />
          </Stage>
        </GameSceneUI>
      </GameSceneActionsProvider>
    </div>
  );
};

export default RouletteGameScene;
