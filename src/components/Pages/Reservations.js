import React, { Component } from 'react';
import Footer from '../Footer';
import Nav from '../Topbar';
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