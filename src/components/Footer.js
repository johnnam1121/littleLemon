import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import restaurant from '../assets/restaurant.jpg';
import "../components/styles/SpecialCards.css";

function Footer() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: '#333333' }} className='align-items-top'>
        <Col className='mt-5 mb-5' style={{ textAlign: 'center' }}>
          <img src={restaurant} alt='Restaurant photo' style={{ width: '20vw' }} />
        </Col>
        <Col md={{ span: 2 }} className='mt-5 mb-5' style={{ textAlign: 'center' }}>
          <ul className='doormat'>
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{textDecoration: 'line-through'}}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{textDecoration: 'line-through'}}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reservations">Reservations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{textDecoration: 'line-through'}}>Order</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{textDecoration: 'line-through'}}>Login</a>
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
          <a href="https://www.facebook.com/">
            <p>Facebook</p>
          </a>
          <a href="https://www.instagram.com/">
            <p>Instagram</p>
          </a>
          <a href="https://www.tiktok.com/en/">
            <p>Tik Tok</p>
          </a>
          <a href="https://twitter.com/?lang=en">
            <p>Twitter</p>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer