import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import OrdenCreada from "../../components/OrdenCreada"
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import { Link } from 'react-router-dom';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';



import { AppContext} from "../../AppContext";
OrdenCreada.contextType = AppContext;


class  ListaOrdenes extends React.Component {
  render () {
    const{items, onClickItem, handleChangeFound , handleChangeDate, handleChangeSelect, deleteFilter, handleChangeSeller, handleChangeProject}=this.context
  return (
      <div>
         
         
                
             


                  <Link  className="text-white " to="/OrdenTrabajo"><Button className='mt-2 mb-2 mr-3 float-right' color="success ">Crear</Button></Link>
              
                  
                  
                  <Table>
                  <thead>
                </thead>
                <tbody>
          <tr  className="filtrar-style">
            <th></th>
            <th>Filtrar por</th>
          <th>
            <Input type="text" name="buscador" placeholder="Clave" onChange={handleChangeFound} >
            </Input>
            
          </th>
          <th>
            <Input type="select" name="nombreVendedor" onChange={handleChangeSeller}>
                <option value="">Vendedor</option>
                <option value="Ameyalli Brito González">Ame</option>
                        <option value="Yozebeth Brito González">Yoz</option>
                        <option value="Lazo Santiago Rubens">Lazo Santiago Rubens</option>
                        <option value="Vicente Galicia Salazar">Vicente Galicia Salazar</option>
                        <option value="America Jimenez Carlon">America Jimenez Carlon</option>
                        <option value="Daniel Hurtado Sanchez">Daniel Hurtado Sanchez</option>
                
            </Input>
          </th>
          <th>
             <Input type="select" name="tipoProyecto" onChange={handleChangeProject}>
                <option value="">Proyecto</option>
                <option value="civil">Civil</option>
                        <option value="direccion">Direccion</option>
                        <option value="finanzas">Finanzas</option>
                        <option value="industrial">Industrial</option>
                        <option value="administracion">Administracion o Contabilidad</option>
                        <option value="civ-ind">Civil-Industrial</option>
                        <option value="civ-fin">Civil-Finanzas</option>
                        <option value="fin-ind">Finanzas-Industrial</option>
                        <option value="ind-prod">Industrial-Producción</option>
                        <option value="civ-fin-ind">Civil-Finanzas-Industrial</option>
            </Input>
          </th>
          <th>
          <Input type="date" name="fechaBuscador" onChange={handleChangeDate} >
            Fecha
            </Input>
          </th>
          <th>
             <Input type="select" name="estatus" onChange={handleChangeSelect}>
                <option value="" >Estatus</option>
                <option value="vendido">Vendido</option>
                <option value="proceso">En proceso</option>
                <option value="cancelado">Cancelado</option>
            </Input>
          </th>
          <th><Button   color="warning text-white" onClick={deleteFilter}><RotateLeftIcon/> </Button></th>
        </tr>
        <tr><th></th></tr>
        
       
          
       
        
        </tbody>

        
         

        
               
            
            
           
        
 
      <thead>
       
        <tr  className="tabla-style">
        

          <th></th>
          <th className="text-center"><FolderOpenIcon/></th>
          <th >Clave</th>
          <th>Vendedor</th>
          <th>Proyecto</th>
          <th>Fecha</th>
          <th>Estatus</th>
          <th></th>
          
        </tr>
       
      </thead>
      
      <tbody>
      {items.map((item, index) =>(
            
            
     
        <tr key={index} className="list">
          <td></td>
          <td className="text-center"><EditOutlinedIcon/><FindInPageOutlinedIcon  id={item.productClave} onClick={onClickItem}/></td>
          <td>{item.productClave}</td>
          <td>{item.vendedor}</td>
          <td>{item.uge}</td>
          <td>{item.dateNew}</td>
          <td>{item.estatus}</td>
          <td><DeleteOutlineOutlinedIcon /></td>
        </tr>
        
        
     
        ))
                }
      </tbody>
     
      </Table>
    <OrdenCreada/>
  
    </div>
  );
}
}



export default ListaOrdenes;