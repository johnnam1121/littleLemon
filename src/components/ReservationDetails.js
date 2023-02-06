import { React, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import bar from '../assets/bar.jpg';
import "../components/styles/SpecialCards.css";

//   <Route path="/ResConfirmation" element={<ResConfirmation />} />
//   let url = '/ResConfirmation';
//   window.location.href = url;

function ReservationDetails() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [size, setSize] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const validate = () => {
  //   return name.length & email.length & phone.length & time.length & date.length
  // };

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
        <Col style={{ background: '#edefee' }} md={{ span: 4, offset: 1 }}>
          <h1 className='reserveH1 opaicCol'>Reserve a table</h1>
          <h4 className='opaicCol'>
            Come reserve a table with us. We here at Little Lemon, pride ourseles with excellent customer service,
            delicious food and awesome vibes.
            Book a table now!
          </h4>
        </Col>
        <Col className='mt-5 mb-5' style={{ backgroundColor: '#edefee' }} md={{ span: 4, offset: 1 }}>
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="formBasicUserName">
              <Form.Label className='formStyler'>Full Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Enter full name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='formStyler'>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label className='formStyler'>Phone Number</Form.Label>
              <Form.Control
                required
                type="phone"
                placeholder="Enter phone number"
              // value={phone}
              // onChange={(e) => setPhone(e.target.value)}
              />
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
              <Form.Select
                required
                type="size"
                // value={size}
                // onChange={(e) => setSize(e.target.value)}
                className='formStyler' aria-label="Default select example">
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
                <Form.Control
                  required
                  type="date"
                  placeholder="Enter date"
                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label className='formStyler'>Time</Form.Label>
                <Form.Control
                  required
                  type="time"
                  placeholder="Enter time"
                  // value={time}
                  // onChange={(e) => setTime(e.target.value)}
                />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button
              className='mb-3'
              variant="primary"
              type="submit"
              // href='/ResConfirmation'
              // disabled={!validate()}
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container >
  )
}

export default ReservationDetails