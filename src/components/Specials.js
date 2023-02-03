import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../components/styles/Footer.css";
import SpecialsCards from './SpecialsCards';
import salad from '../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import dessert from '../assets/lemon dessert.jpg'

function Specials() {
  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col>
          <h1>This Week's Specials!</h1>
        </Col>
        <Col>
          <button>Online Menu</button>
        </Col>
      </Row>
      <Row>
      <Col>
          <SpecialsCards
            Title={"Playing Chess with a Student"}
            Image={salad}
            AltTag={"greek salad"}
            Body={"One of the most important things to me as a teacher is to build positive rapport with my students. "}
          />
          <h1>Greek Salad</h1>
          <h2>Price</h2>
          <p>Some words</p>
          <h2>Order a delivery + delivery icon here</h2>
        </Col>
        <Col>
          <SpecialsCards
            Title={"Playing Chess with a Student"}
            Image={salad}
            AltTag={"greek salad"}
            Body={"One of the most important things to me as a teacher is to build positive rapport with my students. "}
          />
          <h1>Greek Salad</h1>
          <h2>Price</h2>
          <p>Some words</p>
          <h2>Order a delivery + delivery icon here</h2>
        </Col>
        <Col>
          <SpecialsCards
            Title={"Playing Chess with a Student"}
            Image={salad}
            AltTag={"greek salad"}
            Body={"One of the most important things to me as a teacher is to build positive rapport with my students. "}
          />
          <h1>Greek Salad</h1>
          <h2>Price</h2>
          <p>Some words</p>
          <h2>Order a delivery + delivery icon here</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Specials