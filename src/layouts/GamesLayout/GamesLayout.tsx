import { Outlet } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}
const GamesLayout = (props: Props) => {
  return (
    <div className='w-full h-screen'>
      <Outlet />
    </div>
  );
};

export default GamesLayout;
