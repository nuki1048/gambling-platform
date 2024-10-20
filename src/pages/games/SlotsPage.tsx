import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router/utils';

const SlotsPage = () => {
  return (
    <div>
      <div>Slots Page</div>
      <Link to={ROUTES.main}>Go to home</Link>
    </div>
  );
};
export default SlotsPage;
