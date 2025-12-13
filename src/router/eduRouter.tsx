
// import Login from '@/views/auth/login';
import { type RouteObject } from 'react-router-dom';
import EducationLandingPage from '@/views/education/eduLanding';

export const eduRoutes: RouteObject[] = [
  { path: '/edu', element: <EducationLandingPage /> },
];
