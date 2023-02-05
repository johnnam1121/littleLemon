import React from 'react'
import logo from '../assets/Logo.svg'
import "../components/styles/SpecialCards.css";
import restaurant from '../assets/restaurant.jpg'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: '#333333' }} className='align-items-top'>
        <Col className='mt-5 mb-5' style={{ textAlign: 'center' }}>
          <img src={restaurant} alt='Restaurant photo' style={{ width: '20vw' }} />
        </Col>
        <Col md={{ span: 2 }} className='mt-5 mb-5' style={{ textAlign: 'center' }}>
          <ul className='doormat'>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/reservations">Reservations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
          </ul>
        </Col>
        <Col md={{ offset: 1 }} className='mt-5 mb-5'>
          <h2>Contact</h2>
          <p>littlelemon@gmail.com</p>
          <p>123-456-7890</p>
          <p>1234 roadname avenue</p>
          <p>Chicago, Illonois</p>
          <p>12345</p>
        </Col>
        <Col className='mt-5 mb-5'>
          <h2>Socials</h2>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Tik Tok</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer