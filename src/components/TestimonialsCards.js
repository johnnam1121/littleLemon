import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "../components/styles/SpecialCards.css";
const SpecialsCards = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className='mt-3 mb-3'>
        <Col>
          <Image
            className='testimonialsImg'
            src={props.Image}
            alt={props.AltTag}
            onClick={handleShow} />
        </Col>
        <Col>
          <p>{props.Body}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SpecialsCards
