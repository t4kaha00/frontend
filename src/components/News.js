import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import DigitalMarketing from './pages/digital-marketing';

const News = () => (
  <div>
      <Jumbotron>
        <img src="../src/digital.jpg"
          alt="Digital Marketing in 2022"
          className="align-self-center img-fluid"/>
        <p>
          <em>What does the future hold for digital marketing?<br /></em>
          <em>What digital marketing jobs will be in demand?<br /></em>
          <em>Is the future of social media headed for disaster?</em>
        </p>
        <DigitalMarketing />
      </Jumbotron>
    </div>
)

export default News
