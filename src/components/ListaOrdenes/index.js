import React from 'react';
import Modal from 'react-modal';
import { Table, Input , Button} from 'reactstrap';




class  ListaOrdenes extends React.Component {
  render () {
    const{items, onClickItem, closeModal, modalIsOpen, consulta, handleChangeFound , handleChangeDate}=this.context
  return (
      <div>
                  <Table>
              <thead>
                  <tr>
                  <th>Filtrar por:</th>
                  </tr>
                </thead>
                <tbody>
          <tr>
          <th>
            <Input type="text" name="buscador" placeholder="Clave" onChange={handleChangeFound} >
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
          <Input type="date" onChange={handleChangeDate} >
            Fecha
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
          <td><Button id={item.productClave}  onClick={onClickItem}>Ver</Button></td>
          
          <td>{item.productClave}</td>
          <td>{item.vendedor}</td>
          <td>{item.uge}</td>
          <td>{item.dateNew}</td>
          <td>{item.estatus}</td>
        </tr>
        
        
     
        ))
                }
      </tbody>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-inner"
          > 
          <div>
          <h5 className="text-danger text-center">Orden Creada</h5>
         
          
          {consulta.map((item , index)=>(
            <div key={index}>
            <h6  className="text-danger text center">{item.productClave}</h6>
            </div>
            
             
              
             
         
         
           
            
              ))}
                <hr/>   
                <Button onClick={closeModal} >Cerrar</Button>
               
         </div>
         
         </Modal>
      
    </Table>
    
  
    </div>
  );
}
}
Modal.setAppElement('body');


export default ListaOrdenes;