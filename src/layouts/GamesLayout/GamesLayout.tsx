import { Outlet } from 'react-router-dom';

const GamesLayout = () => {
  return (
    <div className='w-full h-screen'>
      <Outlet />
    </div>
  );
};

export default GamesLayout;
