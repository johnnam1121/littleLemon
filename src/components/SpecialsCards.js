import React, { useState } from 'react';
import { Image, Modal } from 'react-bootstrap';
import "../components/styles/SpecialCards.css";

const SpecialsCards = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image
        className='cardImg'
        src={props.Image}
        alt={props.AltTag}
        onClick={handleShow} 
        style={{marginTop:'5vh', width:'100%'}}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="component" closeButton>
          <Modal.Title style={{ color: '#edefee' }}>{props.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="component" >
          <Image src={props.Image} alt={props.AltTag} fluid />
        </Modal.Body>
        <Modal.Footer className="component" >
          <p className="commentary">{props.Body}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SpecialsCards
