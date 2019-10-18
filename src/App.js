import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navegador from './components/Navbar'
import './resources/styles.css';
import ListaOrdenes from './components/ListaOrdenes'
import OrdenTrabajo from "./components/OrdenTrabajo"
import OrdenCreada from "./components/OrdenCreada"
import {AppContextProvider, AppContext} from "./AppContext";

OrdenTrabajo.contextType = AppContext;
ListaOrdenes.contextType = AppContext;
OrdenCreada.contextType = AppContext;


class App extends Component{

 
  
  render(){
  return (
  
   <AppContextProvider >
 
    <BrowserRouter>
    <div className="App">
            <Navegador></Navegador>
            <Route exact path="/" render={() => <ListaOrdenes />} />
            <Route path="/OrdenTrabajo" render={() => <OrdenTrabajo />} />
            <Route path="/OrdenCreada" render={() => <OrdenCreada />} />
   </div>
      
      </BrowserRouter>
      
      
      
      </AppContextProvider>
     
       
      
  );
}
}

export default App;
