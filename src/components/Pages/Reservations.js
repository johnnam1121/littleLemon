import React, { Component } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Specials from '../Specials';
import Nav from '../Nav';
import Testimonials from '../Testimonials';
import About from '../About';
import ReservationDetails from '../ReservationDetails';

class Reservations extends Component {
  render() {
    return (
      <>
        <Nav />
        <ReservationDetails />
        <Footer />
      </>
    )
  }
}

export default Reservations;