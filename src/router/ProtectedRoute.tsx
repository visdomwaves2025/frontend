import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from "@/redux/store";

interface ProtectedProps {
  allowedRoles?: string[];
  children: ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedProps) => {
  const {loginSuccess } = useSelector(
    (state: RootState) => state.auth
  );

  if (!loginSuccess) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes('')) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>; // ✅ render the children (like <MainLayout />)
};

export default ProtectedRoute;
