import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import About from '../About';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';
import Specials from '../Specials';
import Testimonials from '../Testimonials';

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
