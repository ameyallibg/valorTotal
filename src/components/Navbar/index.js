import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,Button

 
  } from 'reactstrap';

const Navegador= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">Anepsa</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
             <Button color="link">  <NavLink  to="/">Home</NavLink></Button>
            </NavItem>

            <NavItem>
                <Button color="success">  <NavLink className="space-between"  to="/OrdenTrabajo">Crear</NavLink></Button>
              
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navegador;