
// import Login from '@/views/auth/login';
import { Navigate, type RouteObject } from 'react-router-dom';
import MainLayout from '@/views/layout/MainLayout';
import Unauthorized from '@/views/auth/Unauthorized';
import Dashboard from '@/views/dashboard/Dashboard';
import AdminPage from '@/views/admin/AdminPage';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from '@/views/landingPage';
import Login from '@/views/auth/login';

export const authRoutes: RouteObject[] = [
  { path: '/', element: <Navigate to="/login" replace /> },
  { path: '/login', element: <Login /> },
  { path: '/unauthorized', element: <Unauthorized /> },
  { path: '/landing', element: <LandingPage /> },

  {
    element: (
      <ProtectedRoute>
        <MainLayout /> {/* ✅ Sidebar layout for protected routes */}
      </ProtectedRoute>
    ),
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/admin', element: <AdminPage /> },
    ],
  },
];
