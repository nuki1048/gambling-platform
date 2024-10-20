import React from 'react';
import RouletteTable from '@/games/roulette//ui/RouletteTable/RouletteTable';
import BetsPanel from '@/games/roulette/ui/BetsPanel/BetsPanel';
import InfoPanel from '../../ui/InfoPanel/InfoPanel';
import EventPanel from '../../ui/EventPanel/EventPanel';
import { RouletteAdditionalTable } from '../../ui/RouletteTable/RouletteAdditionalTable';
import { InfoButton } from '../../ui/InfoButton/InfoButton';
import { GreenSectorRoulette } from '../../ui/RouletteTable/GreenSectorRoulette';

interface Props {
  children: React.ReactNode;
}
const GameSceneUI: React.FC<Props> = ({ children }) => {
  return (
    <div className='relative shadow-roulette '>
      <div className='absolute right-[1%] top-[40%] text-white flex'>
        <GreenSectorRoulette />
        <RouletteTable />
        <RouletteAdditionalTable />
      </div>
      <div className='absolute left-[62%] top-[25%] text-white'>
        <EventPanel />
      </div>
      <div className='absolute left-0 right-0 top-[5%] text-white'>
        <InfoPanel />
      </div>
      <div className='absolute bottom-[12%] right-[22%]'>
        <BetsPanel />
      </div>

      <div className='absolute bottom-[17%] right-[5%]'>
        <InfoButton />
      </div>

      {children}
    </div>
  );
};

export default GameSceneUI;
