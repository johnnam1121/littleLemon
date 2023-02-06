import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import asianMale from '../assets/asianMale.jpg';
import blackFemale from '../assets/blackFemale.jpg';
import hispanic from '../assets/hispanic.jpg';
import olderLady from '../assets/olderLady.jpg';
import star from '../assets/star.jpg';
import "../components/styles/Footer.css";
import TestimonialsCards from './TestimonialsCards';

function Testimonials() {
  return (
    <Container fluid>
      <Row className='mt-5' style={{ backgroundColor: '#495E57' }}>
        <Row className='mt-4 mb-3'>
          <h1 style={{textDecorationLine: 'underline'}}>Testimonials from our customers</h1>
        </Row>
        <Col>
          <Row>
            <h1>Rating: 5</h1>
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
          </Row>
          <TestimonialsCards
            Image={asianMale}
            AltTag={"Asian Male"}
            Body={"I really enjoyed my time at little lemon! The food and service was great! "}
          />
        </Col>
        <Col>
          <Row>
            <h1>Rating: 4</h1>
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
          </Row>
          <TestimonialsCards
            Image={blackFemale}
            AltTag={"greek salad"}
            Body={"Good experience but watch out for a waitress named Karen.. she was rude! "}
          />
        </Col>
        <Col>
          <Row>
            <h1>Rating: 5</h1>
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
          </Row>
          <TestimonialsCards
            Image={hispanic}
            AltTag={"greek salad"}
            Body={"Love love love Little Lemon! Food is afforable and amazing! The service is always amazing and never lets us down! "}
          />
        </Col>
        <Col>
          <Row>
            <h1>Rating: 3</h1>
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
            <img src={star} alt='star' style={{ width: '3vw' }} />
          </Row>
          <TestimonialsCards
            Rating={"3"}
            Image={olderLady}
            AltTag={"greek salad"}
            Body={"The app does not work when I tried to place an online order.. Fix this asap! I'm tired of having to call all the time! "}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonials