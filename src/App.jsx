import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Presentation from './components/Presentation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/lab/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
