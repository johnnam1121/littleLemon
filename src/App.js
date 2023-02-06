import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import ResConfirmation from './components/Pages/ResConfirmation';
import Reservations from './components/Pages/Reservations';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/ResConfirmation" element={<ResConfirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
