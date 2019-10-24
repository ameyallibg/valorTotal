import React  from 'react';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,Button

 
  } from 'reactstrap';

  
  class Navegador extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
 render(){
   const{handleLogout} = this.context

      

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">Anepsa</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
             <Button color="link">  <NavLink  to="/">Home</NavLink></Button>
            </NavItem>
            <NavItem>
         <Button onClick={handleLogout} className="log-out">Cerrar Sesión</Button>
    
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
}

export default Navegador;