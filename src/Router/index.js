import React, {Component} from 'react';
// import Navegador from '../components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import ListaOrdenes from '../components/ListaOrdenes'
import OrdenTrabajo from "../components/OrdenTrabajo"
// import OrdenCreada from "./components/OrdenCreada"
import { AppContext} from "../AppContext";
import { NavLink } from "react-router-dom";
import AnepsaLogo from "../assets/anepsa.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,Button, Card, CardBody, Col, Row

 
  } from 'reactstrap';



OrdenTrabajo.contextType = AppContext;
ListaOrdenes.contextType = AppContext;



class Menu extends Component  {  
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
    const{handleLogout, getName, user} = this.context
  return (
    <BrowserRouter>
  <Col sm={12} >
    <Navbar color="white" light expand="md">
      
    <Col sm={2}>
        <NavbarBrand > <NavLink  to="/"><img src={AnepsaLogo} alt="logo-anepsa" className="LogoAnepsa"></img></NavLink></NavbarBrand>
        </Col>
        <Col sm={7}></Col>
       <Col sm={2}>
        <p>{user} </p>
        <p>{getName} </p>
        </Col>
        <Col sm={1}>
        
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>+</Button>
        </Col>
       
       
      </Navbar>
      </Col>
        <Collapse isOpen={this.state.isOpen} >
        

          <Nav  navbar>
            <div className="left">
            <NavItem>Orden de trabajo</NavItem>
            <NavItem>Directorio Clientes</NavItem>
            <NavItem>Historial de Ventas</NavItem>
            <NavItem>Agenda del vendedor</NavItem>
           
            <NavItem>
           
         <Button onClick={handleLogout} className="log-out">Cerrar Sesión</Button>
    
            </NavItem>

            <NavItem>
                {/* <Button color="success">  <NavLink className="space-between"  to="/OrdenTrabajo">Crear</NavLink></Button> */}
              
            </NavItem>
            </div>
          </Nav>
        </Collapse>
  
  
 
  
    <div className="App">
            {/* <Navegador></Navegador> */}
            <Route exact path="/" render={() => <ListaOrdenes />} />
            <Route path="/OrdenTrabajo" render={() => <OrdenTrabajo />} />
           
   </div>
      
      </BrowserRouter>
      
      
      
     
     
       
      
  );
}
}

export default Menu;