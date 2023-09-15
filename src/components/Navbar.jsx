import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.css'; // Importa tu archivo CSS personalizado

const CustomNavbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const handleOptionClick = () => {
    setSearchActive(true);
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="#">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="me-auto"></Nav>
        <div className="d-flex align-items-center ms-auto">
          <Form className="d-flex mx-auto" style={{ minWidth: '500px', maxWidth: '500px' }}>
            <FormControl type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <Button variant="outline-warning">Buscar</Button>
          </Form>
          <Nav className="me-0">
            {/* Agrega una clase de Bootstrap para alinear a la derecha */}
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#servicio">Servicio</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
