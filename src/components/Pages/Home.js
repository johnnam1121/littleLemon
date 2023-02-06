import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer';
import Header from '../Header';
import Specials from '../Specials';
import Nav from '../Nav';
import Testimonials from '../Testimonials';
import About from '../About';
import ReservationDetails from '../ReservationDetails';
import { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <Header />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
      </>
    )
  }
}

export default Home;
