import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import restaurantfood from '../assets/restaurantfood.jpg'
import './styles/Header.css'

function Header() {
  return (
    <Container fluid>
      <Row className='mt-4 mb-4 align-items-center' style={{ backgroundColor: "#495E57" }}>
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
            <button>Reserve a Table</button>
          </Row>
        </Col>
        <Col sm={{ span: 4, offset: 2 }}>
          <img src={restaurantfood} alt="restaurantfood" />
        </Col>
      </Row>
    </Container>
  )
}

export default Header