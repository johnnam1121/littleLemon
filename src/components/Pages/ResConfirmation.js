import React, { Component } from 'react';
import Footer from '../Footer';
import Nav from '../Topbar';
import ResConfirm from '../ResConfirm';

class ResConfirmation extends Component {
  render() {
    return (
      <>
        <Nav />
        <ResConfirm />
        <Footer />
      </>
    )
  }
}

export default ResConfirmation;