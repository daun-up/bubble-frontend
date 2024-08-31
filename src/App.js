import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TargetPage from './pages/TargetPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/target' element={<TargetPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
