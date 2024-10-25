import { Container, Sprite, useTick } from '@pixi/react';
import { TSlotRow } from './utils';
import { useState } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { selectSlotLifecycle, SlotLifecycle } from '../../slices/slotSlice';

type Props = {
  activeItemID: number;
  id: number;
  slotsRow: TSlotRow[];
};

const ITEM_HEIGHT = 120;
const ITEM_WIDTH = 130;
const SPEED = 40;
const DELTA_ALIGN_CENTER = 200;

const RowPX = ({ id, slotsRow, activeItemID }: Props) => {
  const lifecylce = useAppSelector(selectSlotLifecycle);
  const isStopping = lifecylce === SlotLifecycle.STOPPING;
  const isPlaying = lifecylce === SlotLifecycle.PLAY;

  const FULL_HEIGHT_ROW = slotsRow.length * ITEM_HEIGHT;
  const currentIndexRowItem = slotsRow.findIndex(
    (rowItem) => rowItem.id === activeItemID
  );
  const currentPosition = -(
    currentIndexRowItem * ITEM_HEIGHT -
    DELTA_ALIGN_CENTER
  );
  const startPosition = currentPosition - FULL_HEIGHT_ROW;
  const speed = isStopping || isPlaying ? SPEED : 0;

  const [position, setPosition] = useState(-FULL_HEIGHT_ROW);
  const [fixPosition, setFixPosition] = useState(false);

  useTick((delta) => {
    if (position >= FULL_HEIGHT_ROW) {
      setPosition(-FULL_HEIGHT_ROW);
    } else {
      setPosition(position + speed * delta);
    }

    if (isStopping && !fixPosition) {
      setPosition(startPosition);
      setFixPosition(true);
    }

    if (isStopping && fixPosition) {
      const koefC = currentPosition - position;
      if (koefC > 0) {
        setPosition(position + speed * delta);
      } else {
        setPosition(currentPosition);
      }
    }
  });

  return (
    <Container x={(id - 1) * ITEM_WIDTH} y={position}>
      {/* Fake top row */}
      <Container y={-FULL_HEIGHT_ROW}>
        {slotsRow.map((row, index) => (
          <Sprite
            image={row.image}
            key={row.id}
            x={0}
            y={index * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
      {/* Real row */}
      <Container>
        {slotsRow.map((row, index) => (
          <Sprite
            image={row.image}
            key={row.id}
            x={0}
            y={index * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
      {/* Fake bottom row */}
      <Container y={FULL_HEIGHT_ROW}>
        {slotsRow.map((row, index) => (
          <Sprite
            image={row.image}
            key={row.id}
            x={0}
            y={index * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
    </Container>
  );
};

export default RowPX;
