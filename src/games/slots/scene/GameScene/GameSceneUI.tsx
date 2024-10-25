import React from 'react';
import SlotsInfoPanel from '../../ui/infoPanel';
import SlotBetsPanel from '../../ui/betsPanel';
import SlotsEventPanel from '../../ui/eventPanel';

type Props = {
  children: React.ReactNode;
};

const SlotsGameSceneUI = ({ children }: Props) => {
  return (
    <div className='relative'>
      <div className='absolute left-[5%] top-[30%]'>
        <SlotsInfoPanel />
      </div>
      <div className='absolute right-[10.1%] bottom-[28%]'>
        <SlotsEventPanel />
      </div>
      <div className='absolute left-[50%] bottom-[7%] translate-x-[-50%]'>
        <SlotBetsPanel />
      </div>
      {children}
    </div>
  );
};

export default SlotsGameSceneUI;
