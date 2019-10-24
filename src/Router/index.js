import React, {Component} from 'react';
import Navegador from '../components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import ListaOrdenes from '../components/ListaOrdenes'
import OrdenTrabajo from "../components/OrdenTrabajo"

import { AppContext} from "../AppContext";
OrdenTrabajo.contextType = AppContext;
ListaOrdenes.contextType = AppContext;


class Menu extends Component  {  
  render(){
  return (
  
  
 
    <BrowserRouter>
    <div className="App">
            <Navegador></Navegador>
            <Route exact path="/" render={() => <ListaOrdenes />} />
            <Route path="/OrdenTrabajo" render={() => <OrdenTrabajo />} />
          
   </div>
      
      </BrowserRouter>
      
      
      
     
     
       
      
  );
}
}

export default Menu;