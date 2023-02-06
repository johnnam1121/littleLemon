import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bruchetta from '../assets/bruchetta.svg';
import salad from '../assets/greek salad.jpg';
import dessert from '../assets/lemon dessert.jpg';
import "../components/styles/SpecialCards.css";
import SpecialsCards from './SpecialsCards';

function Specials() {
  return (
    <Container fluid>
      <Row className='mt-4 align-items-center'>
        <Col className='headingText'>
          <h1>******** This Week's Specials! ********</h1>
        </Col>
      </Row>
      <Row>
        <Col className='cards mt-4 mb-4' md={{ span: 3, offset: 1 }}>
          <SpecialsCards
            Title={"Greek Salad"}
            Image={salad}
            AltTag={"greek salad"}
            Body={"The famous Greek salad of crispy lettuce, peppers, olives, and our chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons. "}
          />
          <h1>Greek Salad</h1>
          <h2>$9.99</h2>
          <p>The famous Greek salad of crispy lettuce, peppers, olives, and our chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.</p>
          <button> Order one now! </button>
          <Row className='mt-3 mb-3'></Row>
        </Col>
        <Col className='cards mt-4 mb-4' md={{ span: 3 }}>
          <SpecialsCards
            Title={"Bruschetta"}
            Image={bruchetta}
            AltTag={"Bruschetta"}
            Body={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner. "}
          />
          <h1>Bruschetta</h1>
          <h2>$10.99</h2>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.</p>
          <button> Order one now! </button>
        </Col>
        <Col className='cards mt-4 mb-4' md={{ span: 3 }}>
          <SpecialsCards
            Title={"Playing Chess with a Student"}
            Image={dessert}
            AltTag={"greek salad"}
            Body={"This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."}
          />
          <h1>Lemon Cake</h1>
          <h2>$8.99</h2>
          <p>This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined. Great way to finish your dinner!</p>
          <button> Order one now! </button>
        </Col>
      </Row>

    </Container>
  )
}

export default Specials