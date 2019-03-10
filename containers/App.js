import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, NavbarBrand, FormControl, Button } from 'react-bootstrap';
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
            <Navbar bg="light" expand="lg">
                <NavLink>News</NavLink>
                <NavLink>Intranet</NavLink>
                <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Finnish</NavDropdown.Item>
                <NavDropdown.Item href="">English</NavDropdown.Item>
            </NavDropdown>
            </Navbar>

            {/* <p>This is my new react app</p> */}

            <Navbar bg="primary" expand="lg">
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

            {/* <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic.navbar-nav">
                <NavLink href="#news">News</NavLink>
                <NavLink href="#intranet">Intranet</NavLink>
                <NavDropdown title="Dropdown" id="language-dropdown">
                <NavDropdown.Item href="finnish">Finnish</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="english">English</NavDropdown.Item>
                </NavDropdown> 
                </Navbar.Collapse>
            </Navbar> */}
        
        </div>
        )
    }
}