
import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import OrdenCreada from "../../components/OrdenCreada"



import { AppContext} from "../../AppContext";
OrdenCreada.contextType = AppContext;

class  ListaOrdenes extends React.Component {
  render () {
    const{items, onClickItem, handleChangeFound , handleChangeDate, handleChangeSelect, deleteFilter}=this.context
  return (
      <div>
         
         
                  <Table>
              <thead>

                  <tr>
                  <th>Filtrar por:</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  
                  <th><Button color="warning text-white" onClick={deleteFilter}>Eliminar Filtros  </Button></th>
                  </tr>
                  
                </thead>
                <tbody>
          <tr>
          <th>
            <Input type="text" name="buscador"  onChange={handleChangeFound} >
            </Input>
            
          </th>
          <th>
            <Input type="select" >
                <option >Vendedor</option>
                <option >.</option>
                <option >.</option>
            </Input>
          </th>
          <th>
             <Input type="select">
                <option >Proyecto</option>
                <option >.</option>
            </Input>
          </th>
          <th>
          <Input type="date"  name="fechaBuscador" onChange={handleChangeDate} >
            Fecha
            </Input>
          </th>
          <th>
             <Input type="select" name="estatus" onChange={handleChangeSelect}>
                <option value="estatus" >Estatus</option>
                <option value="vendido">Vendido</option>
                <option value="proceso">En proceso</option>
                <option value="cancelado">Cancelado</option>
            </Input>
          </th>
        </tr>
        
       
          
       
        
        </tbody>

          </Table>
         

        
               
            
            
           

    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Clave</th>
          <th>Vendedor</th>
          <th>Proyecto</th>
          <th>Fecha</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <tbody>
      {items.map((item, index) =>(
            
            
     
        <tr key={index}>
          <td><Button id={item.productClave} name={item.vendedor} onClick={onClickItem}>Ver</Button></td>
          
          <td>{item.productClave}</td>
          <td>{item.vendedor}</td>
          <td>{item.uge}</td>
          <td>{item.dateNew}</td>
          <td>{item.estatus}</td>
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