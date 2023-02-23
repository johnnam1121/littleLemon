import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import logo from '../assets/Logo.svg';
import "../components/styles/Nav.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <Container fluid>
      <Row className='align-items-center' style={{ backgroundColor: "#EDEFEE" }}>
        <Col sm={3} className='mt-3 mb-3'>
          <Nav.Link className='navlink' as={Link} to="/"><img src={logo} alt='Main Logo' className='logo' /></Nav.Link>
        </Col>
        <Col>
          <ul className="nav justify-content-end">
            <li><Nav.Link className='navlink' as={Link} to="/">Home</Nav.Link></li>
            <li><Nav.Link className='navlink' as={Link} to="/"><s>About Us</s></Nav.Link></li>
            <li><Nav.Link className='navlink' as={Link} to="/"><s>Menu</s></Nav.Link></li>
            <li><Nav.Link className='navlink' as={Link} to="/reservations">Reservations</Nav.Link></li>
            <li><Nav.Link className='navlink' as={Link} to="/"><s>Order</s></Nav.Link></li>
            <li><Nav.Link className='navlink' as={Link} to="/"><s>Login</s></Nav.Link></li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Topbar