import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CorePage from '../pages/CorePage/CorePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/core" element = {<CorePage/>  } />
    </Routes>
  );
}
  