import { ROULETTE_TABLE_NUMBERS } from './initData';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  selectActiveNumber,
  selectCurrentBet,
  setActiveNumber,
} from '@/games/roulette/slice/rouletteSlice';
import useSound from 'use-sound';
import soundNumber from '@/assets/sounds/roulette/number.mp3';
import { RouletteColorButton } from './RouletteColorButton';
import { toast } from 'react-toastify';
const RouletteTable = () => {
  const [play] = useSound(soundNumber);
  const activeNumber = useAppSelector(selectActiveNumber);
  const dispatch = useAppDispatch();
  const currentBet = useAppSelector(selectCurrentBet);

  const handleClick = (number: number) => {
    if (!currentBet) {
      toast.error('You need choose a bet first!');
      return;
    }
    play();
    dispatch(setActiveNumber(number));
  };

  const handleContextMenu = () => {
    play();
    dispatch(setActiveNumber(null));
  };

  return (
    <div className='flex flex-wrap w-[600px]'>
      {ROULETTE_TABLE_NUMBERS.map(({ number, color }) => {
        return (
          <RouletteColorButton
            color={color}
            handleClick={handleClick}
            handleContextMenu={handleContextMenu}
            number={number}
            currentBet={currentBet}
            isActive={activeNumber === number}
          />
        );
      })}
    </div>
  );
};

export default RouletteTable;
