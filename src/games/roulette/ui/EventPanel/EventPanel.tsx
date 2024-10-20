import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setRouletteStartSpeed } from '../../slice/rouletteSpinSlice';
import {
  RouletteLifecycle,
  RouletteWinOrLose,
  selectActiveColor,
  selectActiveNumber,
  selectCurrentBet,
  selectRouletteLifecycle,
  selectRouletteWinOrLose,
  setRouletteLifecycle,
} from '../../slice/rouletteSlice';
import { StartButton } from '../../shared/StartButton/StartButton';
import { toast } from 'react-toastify';

const EventPanel = () => {
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const winOrLose = useAppSelector(selectRouletteWinOrLose);
  const activeColor = useAppSelector(selectActiveColor);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const isActiveColorOrNumber =
      activeColor || typeof activeNumber === 'number';
    if (!isActiveColorOrNumber && !currentBet) {
      toast.error('You need to choose a color or number and a bet first!');
      return;
    } else if (!isActiveColorOrNumber && currentBet) {
      toast.error('You need to choose a color or number first!');
      return;
    } else if (isActiveColorOrNumber && !currentBet) {
      toast.error('You need to choose a bet first!');
      return;
    }

    dispatch(setRouletteStartSpeed());
    dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY));
  };

  const winOrLoseText = winOrLose === RouletteWinOrLose.WIN ? 'Win!' : 'Lose';
  const getLifecycleInfo = () => {
    switch (lifecycle) {
      case RouletteLifecycle.READY_TO_START:
        return <StartButton handleClick={handleClick} />;
      case RouletteLifecycle.PLAY:
        return <div>Executing...</div>;
      case RouletteLifecycle.FINISHED:
        return <div>Calculating</div>;
      case RouletteLifecycle.INFO:
        return (
          <>
            <div>{winOrLoseText}</div>
          </>
        );
      default:
        return '';
    }
  };

  return <div>{getLifecycleInfo()}</div>;
};

export default EventPanel;
