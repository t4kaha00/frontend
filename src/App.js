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

import Navigation from './Navigation'
import Router from './Router'
import Home from './components/Home'
import Footer from './components/Footer'

import "./components/home.css"

export default class App extends Component {

    render () {
        return (

            <div className="wrapper">
              <section className="section parallax">

              </section>
              <section class="section static">
                <Navigation />
                <Router />
                <Footer />
              </section>
            </div>

        )
    }
}
