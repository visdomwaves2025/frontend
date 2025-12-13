import { useRoutes } from 'react-router-dom';
import { authRoutes } from './pages';
import { eduRoutes } from './eduRouter';
// import { financeRoutes } from './financeRouter';
// import { attendanceRoutes } from './attendanceRouter';

const MainRouter = () => {
  const routes = [...authRoutes, ...eduRoutes];
  return useRoutes(routes);
};

export default MainRouter;
