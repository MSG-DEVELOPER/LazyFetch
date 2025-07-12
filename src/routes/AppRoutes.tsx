import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CorePage from "../pages/CorePage/CorePage";
import UtilsPage from "../pages/UtilsPage/UtilsPage";
import { ProtectedRoute } from "./ProtectedRoute";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/core"
        element={
          <ProtectedRoute>
            <CorePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/utils/:id"
        element={
          <ProtectedRoute>
            <UtilsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
