import { React, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bar from '../assets/bar.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../components/styles/SpecialCards.css";

function ReservationDetails() {
  return (
    <Container fluid >
      <Row className='align-items-center'
        style={{
          backgroundImage: `url(${bar})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto'
        }}>
        <Col md={{ span: 4, offset: 1 }}>
          <h1 className='reserveH1'>Reserve a table</h1>
          <h2>
            Come reserve a table with us. We here at Little Lemon, pride ourseles with excellent customer service,
            delicious food and awesome vibes.
          </h2>
          <h2>
            Book a table now!
          </h2>

        </Col>
        <Col className='mt-5 mb-5' style={{ backgroundColor: '#edefee' }} md={{ span: 4, offset: 1 }}>
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="formBasicUserName">
              <Form.Label className='formStyler'>Full Name</Form.Label>
              <Form.Control required type="name" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='formStyler'>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label className='formStyler'>Phone Number</Form.Label>
              <Form.Control required type="phone" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='formStyler'>Occasion?</Form.Label>
              <Form.Text className="text-muted">
                -Optional
              </Form.Text>
              <Form.Select className='formStyler' aria-label="Default select example">
                <option className='formStyler'>Select</option>
                <option value="1">Graduation</option>
                <option value="2">Birthday</option>
                <option value="3">Anniversary</option>
                <option value="4">Baby/Bridal/Wedding Shower</option>
                <option value="5">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='formStyler'>Number of Guests</Form.Label>
              <Form.Select required className='formStyler' aria-label="Default select example">
                <option>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8+</option>
              </Form.Select>
            </Form.Group>
            <Row className='mb-3'>
              <Col>
                <Form.Label className='formStyler'>Date</Form.Label>
                <Form.Control required type="date" placeholder="Enter date" />
              </Col>
              <Col>
                <Form.Label className='formStyler'>Time</Form.Label>
                <Form.Control required type="time" placeholder="Enter time" />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button className='mb-3' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default ReservationDetails