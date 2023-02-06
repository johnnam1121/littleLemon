import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bar from '../assets/bar.jpg';
import "../components/styles/SpecialCards.css";

function ResConfirm() {
  return (
    <Container fluid >
      <Row className='align-items-center'
        style={{
          backgroundImage: `url(${bar})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '80vh'
        }}>
        <Col style={{ background: '#edefee' }} md={{ span: 4, offset: 1 }}>
          <h1 className='reserveH1 opaicCol'>Reservation Confirmed!</h1>
          <h4 className='opaicCol'>
            Thank you for your reservation. Your reservation has been confirmed! <br/>
            If you need to make any changes to your reservation, please give us 
            a call at: <br/>(123-456-7890).<br/>
            We are looking forward to seeing you soon! 
          </h4>
        </Col>
      </Row>
    </Container>
  )
}

export default ResConfirm