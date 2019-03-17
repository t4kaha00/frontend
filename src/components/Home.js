import React from 'react'
import { Card, CardGroup, CardDeck, Jumbotron, Button } from 'react-bootstrap';
import Footer from './Footer'


const Home = () => (
  <div>
    <Card  className="text-center" text="light">
        <Card.Img src="../src/main.jpg" alt="Card image" height={300}/>
        <Card.ImgOverlay className="m-auto h-50">
            <Card.Title><h1 className=" font-weight-light lg">Software fueling digital marketing</h1></Card.Title>
            <Button variant="success">Learn More</Button>
        </Card.ImgOverlay>
    </Card>

    <CardDeck className="py-5 px-5" height={200}>
        <Card className="text-center my-auto" text="light" >
        <Card.Img src="../src/company.jpg" className="img-fluid" alt="Card image" fluid/>
        <Card.ImgOverlay className="m-auto h-50">
            <Card.Title className="card-body">Company</Card.Title>
        </Card.ImgOverlay>
        </Card>
        <Card className="text-center my-auto" text="light">
        <Card.Img src="../src/together.jpg" alt="Card image" />
        <Card.ImgOverlay className="m-auto h-50">
            <Card.Title className="card-body py-auto">Products</Card.Title>
        </Card.ImgOverlay>
        </Card>
        <Card className="text-center my-auto" text="light">
        <Card.Img src="../src/contact.jpg" alt="Card image" />
        <Card.ImgOverlay className="m-auto h-50">
            <Card.Title className="card-body">Contact Us</Card.Title>
        </Card.ImgOverlay>
        </Card>
    </CardDeck>

    <Jumbotron className="text-center p-4 ">
      <h4>Latest News</h4>
      <CardDeck className="pm-8 text-center">
        <Card className="p-4 text-left" style={{ width: '18rem' }}>
            <small className="text-muted mb-2">
                27.07.2016
            </small>
            <Card.Text>
                Liana Technologies and Encode Solutions merge to create unique mobile solutions
            </Card.Text>
        </Card>
        <Card className="p-4 text-left" style={{ width: '18rem' }}>
            <small className="text-muted mb-2">
                28.01.2016
            </small>
            <Card.Text>
                From a local startup to a global player: Liana Technologies among the forerunners of digital marketing technology
            </Card.Text>
        </Card>
        <Card className="p-4 text-left" style={{ width: '18rem' }}>
            <small className="text-muted mb-2">
                02.07.2015
            </small>
            <Card.Text>
                Liana Technologies Hong Kong launched a series od digital marketing events in June
            </Card.Text>
        </Card>
      </CardDeck>
    </Jumbotron>
    
</div>
)

export default Home
