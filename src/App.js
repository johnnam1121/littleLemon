import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import ResConfirmation from './components/Pages/ResConfirmation';
import Reservations from './components/Pages/Reservations';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/ResConfirmation" element={<ResConfirmation />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
