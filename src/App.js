import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, NavbarBrand, FormControl, Button, Figure, Card, CardGroup, CardDeck, Jumbotron } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavLink from 'react-bootstrap/NavLink';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import Form from 'react-bootstrap/FormGroup';
import { Link } from 'react-router-dom'


import Router from './Router'
import Home from './components/Home'
import Footer from './components/Footer'

export default class App extends Component {

    render () {
        return (

            <div>
                <Router />
            </div>

        )
    }
}
