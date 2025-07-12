// src/components/routing/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../BBDD/useAuthState";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps): ReactNode {
  const [user, loading] = useAuthState();

  if (loading) {
    return <div>Loading...</div>; // o un spinner
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
