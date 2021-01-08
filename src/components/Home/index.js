import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AnepsaLogo from "../../assets/valortotal.png"
import Estadisticas from "../../assets/estadisticas.png"
import Cliente from "../../assets/cliente.png"
import Orden from "../../assets/documento.png"

class  Home extends React.Component {

  render(){
    return(
      <div className="card-home">
      <Card className="card-style">
             <CardContent>
             <img src={Cliente} alt="logo-anepsa" className="LogoAnepsa"></img>
        <p>Directorio de Clientes</p>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet nibh et nisl maximus lobortis.  </p> */}
      </CardContent>
      <CardActions>
      <Button size="small"><Link to="/ListadoClientes">Ver Lista</Link></Button>
        <Button size="small"><Link to="/DirectorioClientes">Crear</Link></Button>
      </CardActions>
      </Card>
            <Card className="card-style">
            <CardContent>
            <img src={Orden} alt="logo-anepsa" className="LogoAnepsa"></img>
       <p>Orden de Trabajo</p>
       {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet nibh et nisl maximus lobortis.  </p> */}
    
     </CardContent>
     <CardActions>
     
        <Button size="small"><Link to="/ListaOrdenes">Ver Lista</Link></Button>
        <Button size="small"><Link to="/OrdenTrabajo">Crear</Link></Button>
                
    
     </CardActions>
     </Card>
     <Card className="card-style">
            <CardContent>
            <img src={Estadisticas} alt="logo-anepsa" className="LogoAnepsa"></img>
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