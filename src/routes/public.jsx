import { MainLayout } from '../components/layouts/main-layout';
import { Home } from '../modules/home/pages/Home';

export const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'crash',
        element: <>Crash</>,
      },
    ],
  },
];
