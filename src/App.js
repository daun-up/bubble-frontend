import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TargetPage from './pages/TargetPage'
import ManualPage from './pages/ManualPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/target' element={<TargetPage/>} />
        <Route path="/manual" element={<ManualPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
