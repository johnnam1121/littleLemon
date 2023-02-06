import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mario from '../assets/Mario and Adrian A.jpg';
import "../components/styles/SpecialCards.css";

function About() {
  return (
    <Container fluid style={{ backgroundColor: '#edefee' }}>
      <Row className='align-items-center'>
        <Col className='mt-3 mb-3' md={{ span: 4, offset: 2 }}>
          <h1 className='about'>Little Lemon</h1>
          <h2 className='about'>Chicago</h2>
          <p className='about'>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sources menu with daily specials. Come visit us at one of our locations near you!</p>
        </Col>
        <Col className='mt-5 mb-5' md={{ span: 4, offset: 1 }}>
          <img src={mario} alt='mario and adrian' />
        </Col>
      </Row>
    </Container >
  )
}

export default About