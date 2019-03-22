import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const News = () => (
  <div className="bg-light">

  <Container className="pt-5">
    <Row>
      <Col>
        <Link to="/pages/digital-marketing">
          <Jumbotron className="text-center">
            <img src="../src/images/digital.jpg"
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
      <Col>
        <Link to="/pages/google-display">
          <Jumbotron className="text-center">
            <img src="../src/images/google-display.jpg"
              alt="Digital Marketing in 2022"
              className="align-self-center img-fluid"/>
            <h2>
              A Beginner's Guide to Google Display Ads [Infographic]
            </h2>
            </Jumbotron>
          </Link>
        </Col>
        <Col>
          <Link to="/pages/higher-education">
            <Jumbotron className="text-center">
              <img src="../src/images/digital-marketing-guide.jpg"
                alt="Digital Marketing in 2022"
                className="align-self-center img-fluid"/>
              </Jumbotron>
            </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/pages/webinar-recording">
            <Jumbotron className="text-center">
              <h2>
                Webinar Recording
              </h2>
              </Jumbotron>
            </Link>
          </Col>
          <Col>
            <Link to="/pages/ai">
              <Jumbotron className="text-center">
                <img src="../src/images/ai.jpg"
                  alt="AI"
                  className="align-self-center img-fluid"/>
                  <h2>
                    AI helps you to measure your communications and target your content
                  </h2>
                </Jumbotron>
              </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/pages/media-monitor">
              <Jumbotron className="text-center">
                <img src="../src/images/media-monitoring.jpg"
                alt="Media Monitor"
                className="align-self-center img-fluid"/>
                <h2>
                  6 Reasons why Media Monitoring is Important for your Business
                </h2>
                </Jumbotron>
              </Link>
            </Col>
            <Col>
              <Link to="/pages/email-marketing">
                <Jumbotron className="text-center">
                  <img src="../src/images/email-marketing.jpg"
                    alt="Email Marketing"
                    className="align-self-center img-fluid"/>
                  </Jumbotron>
                </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/pages/education-marketing">
                <Jumbotron className="text-center w-100">
                  <img src="../src/images/education-marketing.jpg"
                    alt="5 Tips to Succeed in Higher Education Marketing"
                    className="align-self-center img-fluid"/>
                  <h2>
                    5 Tips to Succeed in Higher Education Marketing
                  </h2>
                </Jumbotron>
              </Link>
            </Col>
          </Row>
      </Container>
    </div>
)

export default News
