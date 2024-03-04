import { Shell } from './providers/shell';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <Shell>
      <AppRoutes />
    </Shell>
  );
};
