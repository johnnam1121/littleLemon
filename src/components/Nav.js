import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/Logo.svg';
import "../components/styles/Nav.css";

function Nav() {
  return (
    <Container fluid>
      <Row className='align-items-center' style={{ backgroundColor: "#EDEFEE" }}>
        <Col sm={3} className='mt-3 mb-3'>
          <a href="/"><img src={logo} alt='Main Logo' className='logo' /></a>
        </Col>
        <Col>
          <ul className="nav justify-content-end">
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
      </Row>
    </Container>
  )
}

export default Nav