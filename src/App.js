import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TargetPage from './pages/TargetPage';
import ReceivedBubbles from './pages/ReceivedBubbles';
import RequestedBubbles from './pages/RequestedBubbles';
import MyBubbles from './pages/MyBubbles';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/target" element={<TargetPage />} />
        <Route path="/ReceivedBubbles" element={<ReceivedBubbles />} />
        <Route path="/RequestedBubbles" element={<RequestedBubbles />} />
        <Route path="/MyBubbles" element={<MyBubbles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
