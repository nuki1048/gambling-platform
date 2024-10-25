import { Stage } from '../../../../app/config/contextBridge';
import SlotsGameSceneUI from './GameSceneUI';
import RowsPX from '../../pixi/rows/RowsPX';
import { BGPX } from '../../../../games/slots/pixi/bgPX/bgPX';
import SlotLifecycleProvider from './SlotLifecycleProvider';
import BalanceProvider from './BalanceProvider';
import BodyPX from '../../pixi/body/bodyPX';

const [width, height] = [1150, 536];

const SlotsGameScene = () => {
  return (
    <div className='flex flex-col items-center justify-content'>
      <BalanceProvider>
        <SlotLifecycleProvider>
          <SlotsGameSceneUI>
            <Stage
              width={width}
              height={height}
              options={{ borderRadius: '50px' }}
              id='canvas'
            >
              <BGPX />
              <RowsPX />
              <BodyPX />
            </Stage>
          </SlotsGameSceneUI>
        </SlotLifecycleProvider>
      </BalanceProvider>
    </div>
  );
};

export default SlotsGameScene;
