import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router/utils';
import { useAppSelector } from '@/app/store/hooks';
import { selectUsernickname } from '@/entities/user/slices/userSlice';

export const MainPage = () => {
  const nickname = useAppSelector(selectUsernickname);

  return (
    <div>
      <div>{nickname}</div>
      <div>Main Page!</div>

      <div className='flex flex-1 gap-3'>
        <Link to={ROUTES.games.roulette}>Go to Roulette</Link>
        <Link to={ROUTES.games.slots}>Go to Slots</Link>
        <Link to={ROUTES.games.hummers}>Go to Hummer</Link>
      </div>
    </div>
  );
};
