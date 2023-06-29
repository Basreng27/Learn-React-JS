import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import '../assets/css/SideBar.css';

import { Card, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from 'react';

const SideBar = () => {
  return (
    <Card className='sideBar'>
      <Navbar>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav defaultActiveKey="#" className="flex-column">
            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
  
            <NavDropdown title="GENRE KOMIK" id="genre-komik-dropdown">
              <NavDropdown.Item as={Link} to="/home">MANGA</NavDropdown.Item>
              <NavDropdown.Item href="#">MANHWA</NavDropdown.Item>
              <NavDropdown.Item href="#">MANHUA</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Card>
  );
}

export default SideBar
