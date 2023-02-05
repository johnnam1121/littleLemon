import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Specials from './components/Specials';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials';
import About from './components/About';
// import ReservationDetails from './components/ReservationDetails';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
      <Nav />
      <p>some blank space here</p>
      {/* <ReservationDetails /> */}
      <Footer />
    </>
  );
}

export default App;
