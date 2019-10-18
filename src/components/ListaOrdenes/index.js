import React from 'react';
import { Table, Input , Button} from 'reactstrap';




class  ListaOrdenes extends React.Component {
  render () {
    const{items} =this.context
  return (
      <div>
                  <Table>
              <thead>
                  <tr>
                  <th>Filtrar por:</th>
                  </tr>
                </thead>
          <tr>
          <th>
            <Input type="text" placeholder="Clave">
            </Input>
          </th>
          <th>
            <Input type="select">
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
          <Input type="date">Fecha
            </Input>
          </th>
          <th>
             <Input type="select">
                <option >Estatus</option>
                <option >Vendido</option>
                <option >En proceso</option>
            </Input>
          </th>
        </tr>


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
      {items.map((item , key)=>(
            
            
            
     
        <tr>
          <Button>Ver</Button>
          
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
  
    </div>
  );
}
}
export default ListaOrdenes;