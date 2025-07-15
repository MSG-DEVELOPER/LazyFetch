import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CorePage from "../pages/CorePage/CorePage";
import UtilsPage from "../pages/UtilsPage/UtilsPage";
import AboutTechPage from "../pages/AboutTechPage/AboutTechPage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import { ProtectedRoute } from "./ProtectedRoute";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-tech" element ={<AboutTechPage/>}/>
      <Route path="/about-me" element ={<AboutMePage/>}/>
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
