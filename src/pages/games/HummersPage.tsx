import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router/utils';

const HummersPage = () => {
  return (
    <div>
      <div>Hummer Page</div>
      <Link to={ROUTES.main}>Go to home</Link>
    </div>
  );
};

export default HummersPage;
