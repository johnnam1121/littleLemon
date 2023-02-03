import React from 'react'
import logo from '../assets/Logo.svg'
import restaurant from '../assets/restaurant.jpg'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={restaurant} alt='Restaurant photo' />
        </Col>
        <Col>
          <p>Doormat Navigation</p>
          <p>basically a navbar but vertical here</p>
        </Col>
        <Col>
          <p>Put contact into here</p>
          <p>address</p>
          <p>email</p>
          <p>number</p>
        </Col>
        <Col>
          <p>social media links?</p>
          <p>address</p>
          <p>email</p>
          <p>number</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer