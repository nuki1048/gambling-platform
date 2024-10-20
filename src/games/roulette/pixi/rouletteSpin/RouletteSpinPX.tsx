import { Container, Sprite, useTick } from '@pixi/react';
import externalCircle from '@/assets/roulette/external-circle.png';
import internalCircle from '@/assets/roulette/internal-circle.png';
import mediumCircle from '@/assets/roulette/medium-circle.png';
import wheel from '@/assets/roulette/wheel.png';
import arrow from '@/assets/roulette/arrow.png';
import bgRoulette from '@/assets/roulette/bg-roulette.png';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  selecteRouletteSpinSpeed,
  selectRotationRouletteInProgress,
  setRouletteSpeed,
  setRouletteSpinDegreeesRotation,
} from '../../slice/rouletteSpinSlice';
import { radianToDegrees } from '@/shared/lib/degrees/radianToDegrees';
import {
  RouletteLifecycle,
  setRouletteLifecycle,
} from '../../slice/rouletteSlice';
import useSound from 'use-sound';
import soundSpin from '@/assets/sounds/roulette/spin.mp3';
const POSITION_SPIN = {
  x: 264,
  y: 286,
};

const POSITION_ARROW = {
  x: 264,
  y: 150,
  rotation: -0.5,
};

const RouletteSpinPX: React.FC = () => {
  const [play, { stop }] = useSound(soundSpin);
  const dispatch = useAppDispatch();
  const speed = useAppSelector(selecteRouletteSpinSpeed);
  const rotationInProgress = useAppSelector(selectRotationRouletteInProgress);
  const [rotationMedium, setRotationMedium] = useState(0);
  const [rotationWheel, setRotationWheel] = useState(0);

  useTick((delta) => {
    const rotation = delta * speed;
    setRotationMedium((prev) => prev + rotation);
    setRotationWheel((prev) => prev - rotation);

    if (speed < 0.005) {
      dispatch(setRouletteSpeed(0));
      dispatch(
        setRouletteSpinDegreeesRotation(
          radianToDegrees(rotationMedium % (Math.PI * 2))
        )
      );
      dispatch(setRouletteLifecycle(RouletteLifecycle.FINISHED));
    } else {
      dispatch(setRouletteSpeed(null));
    }
  }, rotationInProgress);

  useEffect(() => {
    if (rotationInProgress) {
      play();
    } else {
      stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotationInProgress]);

  return (
    <Container>
      <Sprite image={bgRoulette} x={425} y={494} anchor={1} />
      <Sprite
        image={externalCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={internalCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={mediumCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        rotation={rotationMedium}
        anchor={0.5}
      />
      <Sprite
        image={wheel}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
        rotation={rotationWheel}
      />
      <Sprite
        image={arrow}
        x={POSITION_ARROW.x}
        y={POSITION_ARROW.y}
        rotation={POSITION_ARROW.rotation}
        anchor={0.5}
      />
    </Container>
  );
};

export default RouletteSpinPX;
