import React from 'react'
import { Col, Container, Row, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import restaurantfood from '../assets/restaurantfood.jpg'
import './styles/Header.css'

function Header() {
  return (
    <Container fluid>
      <Row className='align-items-center' style={{ backgroundColor: "#495E57" }}>
        <Col sm={{ span: 4, offset: 1 }}>
          <Row>
            <h1>Little Lemon</h1>
          </Row>
          <Row>
            <h2>Austin</h2>
          </Row>
          <Row>
            <p>We are a family owned restaurant, focused on traditional recipies served with a modern twist.</p>
          </Row>
          <Row className='mb-3'>
            {/* <button href="/Reservations">Link</button> */}
            <form action="/reservations">
              <button type="submit"><Nav.Link className='navlink' as={Link} to="/reservations">Reservations</Nav.Link></button>
            </form>
          </Row>
        </Col>
        <Col className='mt-3 mb-3' sm={{ span: 4, offset: 2 }}>
          <img src={restaurantfood} alt="restaurantfood" style={{ width: '25vw' }} />
        </Col>
      </Row>
    </Container>
  )
}

export default Header