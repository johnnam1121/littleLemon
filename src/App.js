import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Specials from './components/Specials';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ReservationDetails from './components/ReservationDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservations from './components/Pages/Reservations';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reservations" element={<Reservations />} />
          {/* <Route path="/MyWorks" element={<MyWorks />} />
          <Route path="/ContactMe" element={<ContactMe />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
