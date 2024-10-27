import React from 'react'
import { useState } from 'react';
import {Button,Modal} from "react-bootstrap"
import experienceList from '../resources/ExpList';
// import 'bootstrap/dist/css/bootstrap.min.css';


function ExperienceModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          More Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
          {experienceList.map((experience) => {
            return experience.technologies;
          })}
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ExperienceModal;
  