import React, {Component} from 'react';
// import Navegador from '../components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import ListaOrdenes from '../components/ListaOrdenes'
import Home from '../components/Home'
import OrdenTrabajo from "../components/OrdenTrabajo"
// import OrdenCreada from "./components/OrdenCreada"
import { AppContext} from "../AppContext";
import { NavLink } from "react-router-dom";
import AnepsaLogo from "../assets/anepsa.png"
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
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
        drawerOpen: false
      };
    }
    toggle() {
      this.setState({
        // isOpen: !this.state.isOpen,
        drawerOpen: !this.state.drawerOpen
      });
    }
  render(){
    const{handleLogout, getName, user} = this.context
  return (
    <BrowserRouter>
  <Col sm={12} className="nav-style" >
    <Navbar  color="white" light expand="md">
      
    <Col sm={2}>
        <NavbarBrand > <NavLink  to="/"><img src={AnepsaLogo} alt="logo-anepsa" className="LogoAnepsa"></img></NavLink></NavbarBrand>
        </Col>
        <Col sm={6}></Col>
       <Col sm={3}>
        {/* <p>{user} </p> */}
        <p>Hola, {getName} </p>
        </Col>
        <Col sm={1}>
        
        <Button  color="white "  onClick={this.toggle} style={{ marginBottom: '1rem' }}><MenuIcon className="text-right"/></Button>
        </Col>
       
       
      </Navbar>
      </Col>
    
        <Drawer
        anchor="right"
        open={this.state.drawerOpen}
        onClose={this.toggle}
       >
        

          <Nav  navbar className="navbar-style">
            
            <NavItem className="text-right "  ><CloseOutlinedIcon onClick={this.toggle}/></NavItem>
            <div className="left text-center">
            <NavItem > <NavLink to="/ListaOrdenes">Orden de trabajo</NavLink></NavItem>
            <NavItem>Directorio Clientes</NavItem>
            <NavItem>Historial de Ventas</NavItem>
            <NavItem>Agenda del vendedor</NavItem>
           
            <NavItem>
           
         <Button onClick={handleLogout} className="log-out">Cerrar Sesión</Button>
    
            </NavItem>

            <NavItem>
              
            </NavItem>
            </div>
          </Nav>
     
        </Drawer>
  
  
 
  
    <div className="App">
         
            <Route exact path="/" render={() => <Home />} />
            <Route path="/OrdenTrabajo" render={() => <OrdenTrabajo />} />
            <Route path="/ListaOrdenes" render={() => <ListaOrdenes />} />
           
   </div>
      
      </BrowserRouter>
      
      
      
     
     
       
      
  );
}
}

export default Menu;