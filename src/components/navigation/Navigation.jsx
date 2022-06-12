import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import './navigation.css'



const Navigation = () => {
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand to="/" as={Link}>Game PTY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link to="/dashboard" as={Link}>Dashboard</Nav.Link>
            <Nav>
              <Nav.Link to="/register" as={Link}>Register</Nav.Link>
              <Nav.Link to="/login" as={Link}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default Navigation