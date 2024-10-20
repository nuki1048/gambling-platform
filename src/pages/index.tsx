import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router/utils';
import { useAppSelector } from '@/app/store/hooks';
import { selectUsernickname } from '@/entities/user/slices/userSlice';
import { useGetUserQuery } from '@/entities/user/api/userApi';

export const MainPage = () => {
  const nickname = useAppSelector(selectUsernickname);
  const { data: users } = useGetUserQuery({
    userId: 1,
  });

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
