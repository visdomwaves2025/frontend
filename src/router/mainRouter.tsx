import { useRoutes } from 'react-router-dom';
import { authRoutes } from './pages';
// import { financeRoutes } from './financeRouter';
// import { attendanceRoutes } from './attendanceRouter';

const MainRouter = () => {
  const routes = [...authRoutes];
  return useRoutes(routes);
};

export default MainRouter;
