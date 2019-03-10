import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, NavbarBrand, FormControl, Button, Figure, Card, CardGroup, CardDeck, Jumbotron } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavLink from 'react-bootstrap/NavLink';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import Form from 'react-bootstrap/FormGroup';

export default class App extends Component {
    render () {
        return (
        <div>
            <Navbar className="bg-success" expand="lg">
                <NavLink>News</NavLink>
                <NavLink>Intranet</NavLink>
                <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Finnish</NavDropdown.Item>
                <NavDropdown.Item href="">English</NavDropdown.Item>
            </NavDropdown>
            </Navbar>

            {/* <p>This is my new react app</p> */}

            <Navbar bg="success" expand="lg">
            <NavbarBrand >
                <strong>Liana</strong>
            </NavbarBrand>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>Company</Nav.Link>
                <Nav.Link>Products</Nav.Link>
                <Nav.Link>Contact us</Nav.Link>           
            </Nav>;
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Navbar>

            <Card className="bg-dark" text="light">
                <Card.Img src="../src/together.jpg" alt="Card image" thumbnail/>
                <Card.ImgOverlay className="text-center ">
                    <Card.Title>Software fueling digital marketing</Card.Title>
                    <Button variant="success">Learn More</Button>
                </Card.ImgOverlay>
            </Card>
            
            <CardDeck className="p-4">
                <Card className="text-center" text="light" >
                <Card.Img src="../src/company.jpg" alt="Card image"  />
                <Card.ImgOverlay>
                    <Card.Title className="card-body ">Company</Card.Title>
                </Card.ImgOverlay>
                </Card>
                <Card className="text-center" text="light">
                <Card.Img src="../src/together.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="card-body mb-0">Products</Card.Title>
                </Card.ImgOverlay>
                </Card>
                <Card className="text-center" text="light">
                <Card.Img src="../src/contact.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="card-body mb-0">Contact Us</Card.Title>
                </Card.ImgOverlay>
                </Card>
            </CardDeck>

            <Jumbotron className="text-center p-4 ">
            <h4>Latest News</h4>
            <CardDeck bg="light" className="pm-8 text-center">
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


           {/* <Figure>
               <Figure.Image width={171} height={180} alt="171x180" src="../src/together.jpg" />
               <Figure.Caption>
                   Software fueling digital marketing
               </Figure.Caption>
           </Figure> */}
        
        </div>
        )
    }
}