import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { MainPage } from '../../pages';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import GamesLayout from '../../layouts/GamesLayout/GamesLayout';
import LoginPage from '../../pages/auth/LoginPage';
import RegisterPage from '../../pages/auth/RegisterPage';
import RoulettePage from '../../pages/games/RoulettePage';
import SlotsPage from '../../pages/games/SlotsPage';
import HummersPage from '../../pages/games/HummersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      { path: 'login', Component: LoginPage },
      {
        path: 'register',
        Component: RegisterPage,
      },
    ],
  },
  {
    path: 'games',
    Component: GamesLayout,

    children: [
      {
        path: 'roulette',
        Component: RoulettePage,
      },
      {
        path: 'slots',
        Component: SlotsPage,
      },
      {
        path: 'hummers',
        Component: HummersPage,
      },
    ],
  },
]);
