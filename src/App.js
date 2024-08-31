import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TargetPage from './pages/TargetPage';
import ReceivedBubbles from './pages/ReceivedBubbles';
import RequestedBubbles from './pages/RequestedBubbles';
import MyBubbles from './pages/MyBubbles';
import ManualPage from './pages/ManualPage';
import FormPage from './pages/FormPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/target" element={<TargetPage />} />
        <Route path="/ReceivedBubbles" element={<ReceivedBubbles />} />
        <Route path="/RequestedBubbles" element={<RequestedBubbles />} />
        <Route path="/MyBubbles" element={<MyBubbles />} />
        <Route path="/manual" element={<ManualPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
