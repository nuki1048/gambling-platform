import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <div>Auth Layout Header</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
