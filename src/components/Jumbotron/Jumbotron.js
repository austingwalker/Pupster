import React from "react";
import { Link } from "react-router-dom";
import "./Jumbotron.css"
import { Container, Row, Col } from 'reactstrap';

const Jumbotron = () => (
  <div>
    <div className="jumbotron">
    </div>
    <Row>
      <Col/>
      <Col>
        <div>
          <h2>Welcome to Pupster!</h2>
          <p>Visit our discover page to see what dogs like you back or view endless pictures of adorable pups on our search page.</p>
        </div>
      </Col>
      <Col/>
    </Row>
  </div>
  
);

export default Jumbotron;
