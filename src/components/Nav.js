import React from 'react'
import logo from '../assets/Logo.svg'
import { Container, Row, Col } from 'react-bootstrap'
import "../components/styles/Nav.css";

function Nav() {
  return (
    <Container fluid >
      <Row className='mt-3 mb-3 align-items-center' style={{ backgroundColor: "#EDEFEE" }}>
        <Col sm={3}>
          <img src={logo} alt='Main Logo' className='logo' />
        </Col>
        <Col>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/menu">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/reservations">Reservations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/order">Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Nav