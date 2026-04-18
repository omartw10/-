import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Presentation from './components/Presentation';
import LabLLM from './lab-pages/LabSQL';
import LabPrompt from './lab-pages/LabPrompt';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/lab/sql" element={<LabLLM />} />
        <Route path="/lab/prompt" element={<LabPrompt />} />
      </Routes>
    </BrowserRouter>
  );
}
