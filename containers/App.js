import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, NavbarBrand } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

export default class App extends Component {
    render () {
        return (
        <div>
            <p>This is my new react app</p>
            <p>Second line.</p>

            <Navbar>
            <NavbarBrand>
                <strong>Liana</strong>
            </NavbarBrand>
        
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>News</NavItem>
                <NavItem>Company</NavItem>
                <NavItem>Contact Us</NavItem>
            </Nav>
            <NavDropdown title="Language">
                <DropdownMenu>
                    <DropdownItem>Finnish</DropdownItem>
                    <DropdownItem>English</DropdownItem>
                </DropdownMenu>
            </NavDropdown>            
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