import React from 'react';
import Modal from 'react-modal';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {Button,   Form, FormGroup, Label, Input, Col } from 'reactstrap';






class OrdenCreada extends React.Component {


    render() {
    
        const{getNewDate,areaSolicitante, rfcSolicitante, listaVisitador, comision, presupuesto, montoVendido, uge, vendedor, copia, oferta, cedido, proyecto, extTelSolicitante, tipoCliente,  nombreSolicitante, empresaSolicitante,  direccionSolicitante, delegacionSolicitante, EDOSolicitante, telSolicitante, emailSolicitante, objetivo, otroObj, proposito, otroProp, presentarse,visitador, fechaIns, telInsp, extInsp, emailInsp, dirInsp,  observaciones, bienes, otroBien, info, otraInfo, inicio, entrega,  facturar,
           productClave,cargoSolicitante,holdingSolicitante, ventaSolicitante,
          closeModal, modalIsOpen,  consulta, handleUpdate,  handleChange, }=this.context
               
        return (
        
            <Modal
            isOpen={modalIsOpen}
            toggle={closeModal}
            className="modal-inner-lista"
            overlayClassName="Overlay"
              
            > 
            <CloseOutlinedIcon className="float-right" onClick={closeModal}/>
            <p className="text-info text-center">Orden Creada</p>
            <hr/>
            
              <div >
                <Form className="form-style">
                  <FormGroup row>
                    <Col md={4}>
              <Label> Clave: </Label>
              <Input type="text"  defaultValue={productClave} readOnly></Input>
              </Col>
             <Col md={8}>
               
              <Label>Vendedor Ejecutivo:</Label>
              <Input name="vendedor" defaultValue={vendedor} readOnly></Input>
              </Col>
              <Col md={4}>
              <Label> UGE: </Label> 
              <Input type="text" name="uge" value={uge} readOnly></Input>
              </Col>
              <Col md={4}>
              <Label> FECHA OT: </Label> 
              <Input name="getNewDate" type="text" value={getNewDate} readOnly></Input>
              </Col>
              
              <Col md={4}>
              <Label> COPIA PARA </Label> 
              <Input  type="select" name="copia"  value={copia} onChange={handleChange} >
                        <option value="">{copia}</option>
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
              </Col>
              </FormGroup>
              <FormGroup  row>
                  <Col md={3}>
              <Label className="ot-color label-input">1. TIPO DE OFERTA </Label>
              
                  <Input name="oferta" type="text" defaultValue={oferta}  onChange={handleChange}></Input>
              </Col>
             <Col md={3}>
                  <Label className="ot-color label-input">1.1 CEDIDO DE  </Label>
                  
                  <Input name="cedido" type="text"  defaultValue={cedido}  onChange={handleChange}></Input> 
                 
             </Col>
             <Col md={3}> 
              <Label   className="ot-color label-input">2. TIPO DE PROYECTO </Label>
              
                  <Input   name="proyecto" type="text" defaultValue={proyecto}  onChange={handleChange}></Input>
              
              </Col>
             <Col md={3}>
                  <Label  className="ot-color label-input">3. TIPO DE CLIENTE  </Label>
                 
                  <Input name="tipoCliente"  type="text"  defaultValue={tipoCliente}  onChange={handleChange}></Input>
                 
                  
             </Col>
             
             {consulta.map(item =>(
               
               <FormGroup row className="mr-0 ml-0">
                 <Col md={12}>
               <hr/>
             <h6 className="ot-color">4. DATOS DEL CLIENTE</h6>
             </Col>
             <Col md={3}>
              <Label> Nombre: </Label>
              <Input type="text"  defaultValue={item.cliente.nombre} readOnly></Input>
              </Col>
              <Col md={3}>
              <Label> Empresa: </Label>
              <Input type="text"  value={item.cliente.empresa} readOnly ></Input>
              </Col>
              <Col md={3}>
              <Label>Cargo:</Label>
              <Input type="text" value={item.cliente.cargo} readOnly></Input>
              </Col>
             <Col md={3}>
              <Label>Area:</Label>
              <Input type="text" value={item.cliente.area} readOnly></Input>
              </Col>

              <Col md={3}>
              <Label> RFC: </Label> 
              <Input type="text" value={item.cliente.rfc} readOnly></Input>
              </Col>
              <Col md={3}>
              <Label> Holding: </Label> 
              <Input type="text" value={item.cliente.holding} readOnly></Input>
              </Col>
              <Col md={3}>
              <Label> Dirección: </Label> 
              <Input type="text" value={item.cliente.direccion} readOnly></Input>
              </Col>
              <Col md={3}>
              <Label> Ciudad/EDO </Label> 
              <Input type="text" value={item.cliente.estado} readOnly></Input>
              </Col>
              <Col md={3}>
              <Label> Servicio: </Label> 
              <Input type="text" value={item.cliente.servicios} readOnly></Input>
              </Col>
              <Col md={3}>
              <Label> Origen: </Label> 
              <Input type="text" value={item.cliente.venta} readOnly></Input>
              </Col>
              <Col md={2}>
              <Label> Teléfono: </Label> 
              <Input type="text" value={item.cliente.telefono} readOnly></Input>
              </Col>
              <Col md={1}>
              <Label> Ext: </Label> 
              <Input type="text" value={item.cliente.extTel} readOnly></Input>
              </Col>
              <Col md={3}>
              <Label> Correo Electrónico: </Label> 
              <Input type="text" value={item.cliente.email} readOnly></Input>
              </Col> 
             
              </FormGroup>
             
              
        ))
      } 
      <FormGroup row className="ml-0 mr-0">
              <Col md={12}>
              <hr/> 
              <h6 className="ot-color">5. SOLICITANTE DEL AVALÚO</h6>
             </Col>
             <Col md={3}>
              <Label> Nombre Solicitante: </Label>
              <Input  type="text"  name="nombreSolicitante" defaultValue={nombreSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col md={3}>
              <Label> Empresa </Label>
              <Input  type="text"  name="empresaSolicitante" defaultValue={empresaSolicitante}  onChange={handleChange}> ></Input>
              </Col>
              <Col md={3}>
              <Label> Cargo: </Label> 
              <Input type="text"name="cargoSolicitante" defaultValue={cargoSolicitante} onChange={handleChange}></Input>
              </Col>
              <Col md={3}>
              <Label> Area </Label> 
              <Input type="text"  name="areaSolicitante" defaultValue={areaSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col md={3}>
              <Label> RFC </Label> 
              <Input type="text"  name="rfcSolicitante" defaultValue={rfcSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col md={3}>
              <Label> Holding </Label> 
              <Input type="text"  name="holdingSolicitante" defaultValue={holdingSolicitante}  onChange={handleChange}>></Input>
              </Col>
             <Col md={3}>
              <Label>Dirección:</Label>
              <Input type="text" name="direccionSolicitante" defaultValue={direccionSolicitante}  onChange={handleChange}>></Input>
              </Col>

              <Col md={3}>
              <Label> Deleg/Municipio: </Label> 
              <Input type="text" name="delegacionSolicitante" defaultValue={delegacionSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col md={3}>
              <Label> Ciudad/Estado </Label> 
              <Input type="text"  name="EDOSolicitante" defaultValue = {EDOSolicitante} onChange={handleChange}> ></Input>
              </Col>
              <Col md={3}>
              <Label> Origen </Label> 
              <Input type="text"  name="ventaSolicitante" defaultValue = {ventaSolicitante} onChange={handleChange}> ></Input>
              </Col>
              <Col md={2}>
              <Label> Teléfono: </Label> 
              <Input type="text" name="telSolicitante" defaultValue={telSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col md={1}>
              <Label> Ext: </Label> 
              <Input type="text" name="extTelSolicitante" defaultValue={extTelSolicitante} onChange={handleChange} ></Input>
              </Col>
              <Col md={3}>
              <Label> Correo Electrónico: </Label> 
              <Input type="text" name="emailSolicitante" defaultValue={emailSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col md={12}><hr/></Col>
               
           </FormGroup>   
             <Col md={6}>
              <Label className="ot-color"> 6. OBJETIVO DEL AVALÚO</Label>
              <Input type="text" name="objetivo" defaultValue={objetivo}  onChange={handleChange}>></Input>
              </Col>
              <Col md={6}>
              <Label className="ot-color"> Otro Objetivo</Label>
              <Input type="text" name="otroObj" defaultValue={otroObj}  onChange={handleChange}>></Input>
              </Col>
             <Col md={6}>
              <Label className="ot-color">7. PROPOSITO DEL AVALÚO:</Label>
              <Input type="text"name="proposito" defaultValue={proposito}  onChange={handleChange}>> </Input>
              </Col>
              <Col md={6}>
              <Label className="ot-color">Otro Propósito</Label>
              <Input type="text" name="otroProp" defaultValue={otroProp}  onChange={handleChange}>> </Input>
              </Col>
              <Col md={12}>
              <hr/>
             <h6 className="ot-color"> 8. INSPECCIÓN FÍSICA</h6>
             </Col>
             <Col md={6}>
              <Label>Presentarse con:</Label>
              <Input type="text" name="presentarse" defaultValue={presentarse}  onChange={handleChange}>></Input>
              </Col>
             <Col md={6}>
              <Label>Visitador</Label>
      
              <Input type="select" name="visitador" defaultValue={visitador} onChange={handleChange} >
              <option value={visitador}>{visitador}</option>
                    {listaVisitador.map(item =>(

                        <option value={item}>{item}</option>
                    )
                    )
                    }
               </Input>
              </Col>
              <Col md={3}>
              <Label>Fecha</Label>
              <Input name="fechaIns" type="text" defaultValue={fechaIns}  onChange={handleChange}>></Input>
              </Col>
              <Col md={3}>
              <Label>Teléfono</Label>
              <Input name="telInsp" type="text" defaultValue={telInsp} onChange={handleChange}> ></Input>
              </Col>
              <Col md={2}>
              <Label>Exten</Label>
              <Input name="extInsp" type="text" defaultValue={extInsp} onChange={handleChange}>></Input>
              </Col>
              <Col md={4}>
              <Label>Correo Electrónico</Label>
              <Input name="emailInsp" type="text" defaultValue={emailInsp} onChange={handleChange}>></Input>
              </Col>
              <Col md={7}>
              <Label>Dirección</Label>
              <Input name="dirInsp" type="text" defaultValue={dirInsp} onChange={handleChange}>></Input>
              </Col>
              <Col md={5}>
              <Label>Observaciones</Label>
              <Input name="observaciones" type="text" defaultValue={observaciones} onChange={handleChange}>></Input>
              </Col>
             
              <Col md={12}>
              <hr/>
             
             </Col>
             <Col md={6}>
              <Label className="ot-color"> 9. BIENES A VALUAR</Label>
              <FormGroup row >
              <Col md={6}>
              <Label>Bienes</Label>
              <Input name="bienes" type="text" defaultValue={bienes}  onChange={handleChange}>></Input>
              </Col>
              <Col md={6}>
              <Label>Otro Bien</Label>
              <Input name="otroBien" type="text" defaultValue={otroBien}  onChange={handleChange}>></Input>
              </Col>
              </FormGroup>
              </Col>
             <Col md={6}>
              <Label className="ot-color">10. FECHAS</Label>
              <FormGroup row >
                <Col md={6}>
                <Label>Inicio</Label>
              <Input name="inicio" type="date" defaultValue={inicio} onChange={handleChange}>></Input>
              </Col>
              <Col md={6}>
                <Label>Entrega</Label>
              <Input name="entrega" type="text" defaultValue={entrega} onChange={handleChange}>></Input>
              </Col>
              </FormGroup>
              </Col>
              <Col md={12}>
              <hr/>
             <h6 className="ot-color"> 11. INFORMACIÓN PROPORCIONADA</h6>
            <FormGroup row>
             <Col md="4">
             <Input  type="select" name="info" defaultValue={info} onChange={handleChange} >
                  <option value="">{info}</option>
                <option value="AVALÚO ANTERIOR">AVALÚO ANTERIOR</option>
                <option value="BOLETA DE AGUA">BOLETA DE AGUA</option>
                <option value="BOLETA PREDIAL">BOLETA PREDIAL</option>
                <option value="CATÁLOGO DE ARRENDAMIENTO">CATÁLOGO DE ARRENDAMIENTO</option>
                <option value="CATÁLOGO DE CUENTAS">CATÁLOGO DE CUENTAS</option>
                <option value="CONTRATO DE COMPRA-VENTA">CONTRATO DE COMPRA-VENTA</option>
                <option value="ESCRITURAS">ESCRITURAS</option>
                <option value="FACTURA">FACTURA</option>   
                <option value="FOLIO REAL">FOLIO REAL</option>
                <option value="LISTADO CONTABLE">LISTADO CONTABLE</option>
                <option value="LISTA DE ACTIVO FIJO">LISTA DE ACTIVO FIJO</option>
                <option value="LISTA DE PROVEEDORES">LISTA DE PROVEEDORES</option>
                <option value="OFICIO">OFICIO</option>
                <option value="ORDEN DE COMPRA">ORDEN DE COMPRA</option>
                <option value="PEDIMIENTO DE IMPORTACIÓN">PEDIMIENTO DE IMPORTACIÓN</option>
                <option value="PLACAS O ETIQUETAS">PLACAS O ETIQUETAS</option>   
             </Input>
            </Col>
            <Col md={8}>
              <Input type="text" name="otraInfo" defaultValue={otraInfo} onChange={handleChange}>></Input>
            </Col>
            </FormGroup>
             </Col>
            

              <Col md={12}>
              <hr/>
             
             </Col>
             <Col md={3}>
              <Label className="ot-color">COMISIÓN EXTERNA</Label>
              <Input type="text" name="comision" defaultValue={comision}  onChange={handleChange}>></Input>
              </Col>
              <Col md={3}>
              <Label className="ot-color">PRESUPUESTO</Label>
              <Input type="text" name="presupuesto" defaultValue={presupuesto}  onChange={handleChange}>></Input>
              </Col>
              <Col md={4}>
              <Label className="ot-color">MONTO NETO VENDIDO</Label>
              <Input type="text"  name="montoVendido" defaultValue={montoVendido} onChange={handleChange}> ></Input>
              </Col>
              <Col md={2}>
              <Label className="ot-color">FACTURAR</Label>
              <Input type="text" name="facturar" defaultValue={facturar} onChange={handleChange}>></Input>
              </Col>

              </FormGroup>
              </Form>  
  
              </div>
              
            
                  <hr/>   
                  <Button onClick={closeModal} >Cerrar</Button>

                  <Button className="ml-1 btn-success"  onClick={handleUpdate}>Guardar</Button>
                 
              
           
           </Modal>
        
            
        )
}}

Modal.setAppElement('body');


export default OrdenCreada