import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import './resources/styles.css';
import ListaOrdenes from './components/ListaOrdenes'
import OrdenTrabajo from "./components/OrdenTrabajo"
import {AppContextProvider, AppContext} from "./AppContext";

OrdenTrabajo.contextType = AppContext;
ListaOrdenes.contextType = AppContext;

class App extends Component{

 
  
  render(){
  return (
  
   <AppContextProvider >
 
    <BrowserRouter>
    <div className="App">
            <Navbar></Navbar>
            <Route path="/OrdenTrabajo" render={() => <OrdenTrabajo />} />
   </div>
      
      </BrowserRouter>
      <ListaOrdenes />
      
      
      </AppContextProvider>
     
       
      
  );
}
}

export default App;
