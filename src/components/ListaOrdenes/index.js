import React from 'react';
import Modal from 'react-modal';
import {Table, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';




class  ListaOrdenes extends React.Component {
  render () {
    const{items, onClickItem, closeModal, modalIsOpen, consulta, handleChangeFound , handleChangeDate, handleChangeSelect, deleteFilter}=this.context
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
          className="modal-inner-lista"
          > 
          <div>
          <h5 className="text-danger text-center">Orden Creada</h5>
         
          
          {consulta.map((item , index)=>(
            <div key={index}>
              <Form className="form-style">
                <FormGroup row>
                  <Col sm={4}>
            <Label> Clave: </Label>
            <Input type="text" value={item.productClave} ></Input>
            </Col>
           <Col sm={8}>
            <Label>Vendedor Ejecutivo:</Label>
            <Input type="text" value={item.vendedor}></Input>
            </Col>
            <Col sm={4}>
            <Label> UGE: </Label> 
            <Input type="text" value={item.uge}></Input>
            </Col>
            <Col sm={2}>
            <Label> FECHA OT: </Label> 
            <Input type="text" value={item.dateNew}></Input>
            </Col>
            <Col sm={2}>
            <Label> ESTATUS: </Label> 
            <Input type="text" value={item.estatus}></Input>
            </Col>
            <Col sm={4}>
            <Label> COPIA PARA </Label> 
            <Input type="text" ></Input>
            </Col>
            </FormGroup>
            <FormGroup  row>
                <Col sm={3}>
            <Label className="ot-color label-input">1. TIPO DE OFERTA </Label>
            
                <Input  type="text" />
            </Col>
           <Col sm={3}>
                <Label className="ot-color label-input">1.1 CEDIDO DE  </Label>
                
                <Input  type="text"  />
               
           </Col>
           <Col sm={3}>
            <Label   className="ot-color label-input">2. TIPO DE PROYECTO </Label>
            
                <Input  type="text" />
            
            </Col>
           <Col sm={3}>
                <Label  className="ot-color label-input">3. TIPO DE CLIENTE  </Label>
               
                <Input  type="text"  />
               
                
           </Col>
           <Col sm={12}>
             <hr/>
  
           <h6 className="ot-color">4. DATOS DEL CLIENTE</h6>
           </Col>
           <Col sm={4}>
            <Label> Nombre: </Label>
            <Input type="text"  ></Input>
            </Col>
           <Col sm={8}>
            <Label>Dirección:</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={4}>
            <Label> Ciudad/EDO: </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={8}>
            <Label> Atención: </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={4}>
            <Label> Teléfono: </Label> 
            <Input type="text"></Input>
            </Col>
            <Col sm={2}>
            <Label> Extension: </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={6}>
            <Label> Correo Electrónico: </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={12}>
            <hr/>
           <h6 className="ot-color">5. SOLICITANTE DEL AVALÚO</h6>
           </Col>
           <Col sm={4}>
            <Label> Nombre Solicitante: </Label>
            <Input type="text"  ></Input>
            </Col>
           <Col sm={8}>
            <Label>Dirección:</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={4}>
            <Label> RFC </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={4}>
            <Label> Deleg/Municipio: </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={4}>
            <Label> Ciudad/Estado </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={4}>
            <Label> Teléfono: </Label> 
            <Input type="text"></Input>
            </Col>
            <Col sm={2}>
            <Label> Extension: </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={6}>
            <Label> Correo Electrónico: </Label> 
            <Input type="text" ></Input>
            </Col>
            <Col sm={12}><hr/></Col>
            
         
           <Col sm={6}>
            <Label className="ot-color"> 6. OBJETIVO DEL AVALÚO</Label>
            <Input type="text"  ></Input>
            </Col>
           <Col sm={6}>
            <Label className="ot-color">7. PROPOSITO DEL AVALÚO:</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={12}>
            <hr/>
           <h6 className="ot-color"> 8. INSPECCIÓN FÍSICA</h6>
           </Col>
           <Col sm={6}>
            <Label>Presentarse con:</Label>
            <Input type="text"  ></Input>
            </Col>
           <Col sm={6}>
            <Label>Visitador</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={3}>
            <Label>Fecha</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={3}>
            <Label>Teléfono</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={2}>
            <Label>Exten</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={4}>
            <Label>Correo Electrónico</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={7}>
            <Label>Dirección</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={5}>
            <Label>Observaciones</Label>
            <Input type="text"></Input>
            </Col>
           
            <Col sm={12}>
            <hr/>
           
           </Col>
           <Col sm={6}>
            <Label className="ot-color"> 9. BIENES A VALUAR</Label>
            <Col sm={12}>
            <Label>Bienes</Label>
            <Input type="text"  ></Input>
            </Col>
            </Col>
           <Col sm={6}>
            <Label className="ot-color">10. FECHAS</Label>
            <FormGroup row >
              <Col sm={6}>
              <Label>Inicio</Label>
            <Input type="text"></Input>
            </Col>
            <Col sm={6}>
              <Label>Entrega</Label>
            <Input type="text"></Input>
            </Col>
            </FormGroup>
            </Col>
            <Col sm={12}>
            <hr/>
           <h6 className="ot-color"> 11. INFORMACIÓN PROPORCIONADA</h6>
           
            <Input type="text.area"  ></Input>
            </Col>
            <Col sm={12}>
            <hr/>
           
           </Col>
           <Col sm={4}>
            <Label className="ot-color">PRESUPUESTO</Label>
            <Input type="text"  ></Input>
            </Col>
            <Col sm={4}>
            <Label className="ot-color">MONTO VENDIDO</Label>
            <Input type="text"  ></Input>
            </Col>
            <Col sm={2}>
            <Label className="ot-color">ELABORO</Label>
            <Input type="text"  ></Input>
            </Col>
            <Col sm={2}>
            <Label className="ot-color">FACTURAR</Label>
            <Input type="text"  ></Input>
            </Col>
            
            
            
            </FormGroup>
            </Form>  

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