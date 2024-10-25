import { Container, Graphics } from '@pixi/react';
import RowPX from './RowPX';
import { SLOT_ROW, TSlotRow } from './utils';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useAppSelector } from '../../../../app/store/hooks';
import { selectSlotRows } from '../../slices/slotSlice';

const generateRandomRow = (slotRows: TSlotRow[]) => {
  const clone = [...slotRows];
  clone.sort(() => Math.random() - 0.5);
  return clone;
};

const RowsPX = () => {
  const [loading, setLoading] = useState(false);
  const rows = useAppSelector(selectSlotRows);

  const firstSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
  const secondSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
  const thirdSlotsRow = useMemo(() => generateRandomRow(SLOT_ROW), []);

  const slotsRows = [firstSlotsRow, secondSlotsRow, thirdSlotsRow];

  const maskRef = useRef(null);

  useEffect(() => {
    setLoading(true);

    console.log('RowsPX loading', loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container x={445} y={0} mask={maskRef?.current}>
      <Graphics
        draw={(g) => {
          g.beginFill(0x000000);
          g.drawRect(-100, 50, 450, 350);
          g.endFill();
        }}
        ref={maskRef}
      />
      {rows.map((row, index) => (
        <RowPX key={row.id} {...row} slotsRow={slotsRows[index]} />
      ))}
    </Container>
  );
};

export default RowsPX;
