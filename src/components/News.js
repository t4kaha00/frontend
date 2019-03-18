import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const News = () => (
  <div className="w-100 p-5 my-auto">
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

      <Link to="/pages/digital-marketing">
        <Jumbotron className="text-center float-left" style={{width: '48%', height: '400px'}}>
          <img src="../src/google-display.jpg"
            alt="Digital Marketing in 2022"
            className="align-self-center img-fluid"/>
          <h2>
            A Beginner's Guide to Google Display Ads [Infographic]
          </h2>
          </Jumbotron>
        </Link>

        <Link to="/pages/digital-marketing">
          <Jumbotron className="text-center float-right" style={{width: '48%', height: '400px'}}>
            <img src="../src/digital-marketing-guide.jpg"
              alt="Digital Marketing in 2022"
              className="align-self-center img-fluid "/>
            <h2>
              Free Download: Digital Marketing for Higher Education
            </h2>
            </Jumbotron>
          </Link>
    </div>
)

export default News
