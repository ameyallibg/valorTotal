import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Clientes from '../../assets/cliente.jpg'
import Orden from '../../assets/documento.jpg'
import Estadísticas from '../../assets/estadisticas.jpg'
import { Link } from 'react-router-dom';

class  Home extends React.Component {

  render(){
    return(
      <div className="card-home">
      <Card className="card-style">
             <CardContent>
             <img src={Clientes} alt="logo-anepsa" className="LogoAnepsa"></img>
        <p>Directorio de Clientes</p>

      </CardContent>
      <CardActions>
      <Button size="small"><Link to="/ListadoClientes">Ver Lista</Link></Button>
        <Button size="small"><Link to="/CrearCliente">Crear</Link></Button>
      </CardActions>
      </Card>
            <Card className="card-style">
            <CardContent>
      
       <img src={Orden} alt="logo-anepsa" className="LogoAnepsa"></img>
       <p>Orden de Trabajo</p>
     </CardContent>
     <CardActions>
     
        <Button size="small"><Link to="/ListaOrdenes">Ver Lista</Link></Button>
        <Button size="small"><Link to="/OrdenTrabajo">Crear</Link></Button>
                
    
     </CardActions>
     </Card>
     <Card className="card-style">
            <CardContent>
       
       <img src={Estadísticas} alt="logo-anepsa" className="LogoAnepsa"></img>
       <p>Estadísticas</p>
     </CardContent>
     <CardActions>
       <Button size="small">Learn More</Button>
     </CardActions>
     </Card>
    
     
     </div>

      
    

    )
  }


}

export default  Home;