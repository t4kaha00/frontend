import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const News = () => (
  <div className="mt-5 mx-auto">

  <Container>
  <Row>
    <Col>
    <Link to="/pages/digital-marketing">
      <Jumbotron className="text-center w-100 float-left">
        <img src="../src/digital.jpg"
          alt="Digital Marketing in 2022"
          className="align-self-center img-fluid"/>
        <h2>
          14 Digital Marketing Predictions for 2022 [+ Infographic]
        </h2>
        </Jumbotron>
      </Link>
      </Col>
    </Row>

    <Row>
    <Col md={6}>
      <Link to="/pages/google-display">
        <Jumbotron className="text-center">
          <img src="../src/google-display.jpg"
            alt="Digital Marketing in 2022"
            className="align-self-center img-fluid"/>
          <h2>
            A Beginner's Guide to Google Display Ads [Infographic]
          </h2>
          </Jumbotron>
        </Link>
      </Col>
      <Col md={6}>
        <Link to="/pages/higher-education">
          <Jumbotron className="text-center">
            <img src="../src/digital-marketing-guide.jpg"
              alt="Digital Marketing in 2022"
              className="align-self-center img-fluid"/>
            </Jumbotron>
          </Link>
      </Col>
      </Row>
      </Container>
    </div>
)

export default News
