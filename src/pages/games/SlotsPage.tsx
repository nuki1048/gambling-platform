import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router/utils';
import CoreGameSlots from '@/games/slots';

const SlotsPage = () => {
  return (
    <div className='bg-slots w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center'>
      <div>Slots Page</div>
      <Link to={ROUTES.main}>Go to home</Link>
      <CoreGameSlots />
    </div>
  );
};
export default SlotsPage;
