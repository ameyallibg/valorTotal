import React from 'react';
import Modal from 'react-modal';
import {CustomInput, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';


class  OrdenTrabajo extends React.Component {
    
  
    render(){
    const{ vendedor,uge,  copia,  oferta,
    cedido, proyecto, tipoCliente,  
    nombreCliente, rfcCliente, direccionCliente, delegacionCliente,
    EDOCliente, atencion,telCliente, extTel, 
    nombreSol, rfcSol, direccionSol, EDOSol, telSol, extenSol,emailSol,
    objetivo, otroObj, proposito, otroProp,
    presentarse, visitador,
    telInsp, emailInsp, dirInsp, observaciones,
    bienes,otroBien,presupuesto, montoVendido, elaboro, estatus, facturar,modalIsOpen,  dateNew, info, otraInfo, emailCliente, delegacionSol, extInsp, handleChange ,handleSubmit, closeModal, } = this.context
    
    return ( 
        //Ceacion formulario
        <div className="div-form">
            <h3 className="text-align-items title-style">.</h3>
            <Form  className="center-box style-form" id="formClear" onSubmit={handleSubmit}>
                <h5 className="ot-color ot-center">ORDEN DE TRABAJO</h5>
            <FormGroup>
                 <Label sm={12} >UGE <span className="text-danger">*</span>   </Label>
                 <Col sm={5}>
                     <Input type="text" name="uge" value={uge} onChange={handleChange}/>
                 </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12}  >Vendedor Ejecutivo <span className="text-danger">*</span> </Label>
                <Col sm={9}>
                    <Input  type="select" name="vendedor" value={vendedor} onChange={handleChange} >
                    <option value="">Selecciona</option>
                        <option value="Ameyalli Brito González">Ame</option>
                        <option value="Yozebeth Brito González">Yoz</option>
                     
                        
                        </Input>
                </Col>
            </FormGroup>
            <FormGroup> 
                <Label sm={12} >Fecha OT<span className="text-danger">*</span> </Label>
                <Col sm={6}> 
                    <Input  name="dateNew" value={dateNew} onChange={handleChange} type="date"/>
                </Col>   
           </FormGroup>
            <FormGroup >
                    <Label  sm={12}>Copia para <span className="text-danger">*</span> </Label>
                <Col sm={6}>
                    <Input  type="select" name="copia"  value={copia} onChange={handleChange}>
                        <option value="">Selecciona</option>
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
            <hr/>
            <FormGroup  row>
                <Col sm={6}>
            <Label  sm={12} className="ot-color label-input">1. TIPO DE OFERTA </Label>
            <Col >
                <Input  type="text" name="oferta" value={oferta} onChange={handleChange} />
            </Col>
            </Col>
           <Col sm={6}>
                <Label sm={12} className="ot-color label-input">1.1 CEDIDO DE  </Label>
                <Col >
                <Input  type="text" name="cedido" value={cedido} onChange={handleChange} />
                </Col>
           </Col>
            </FormGroup>  
            <FormGroup row>
                <Col sm={6}>
                <Label sm={12} className="ot-color label-input">2. TIPO DE PROYECTO <span className="text-danger">*</span>  </Label>
                <Col >
                <Input  type="select" name="proyecto" value={proyecto} onChange={handleChange} >
                    <option value="">Selecciona</option>
                    <option value="civil">.</option>
                    <option value="direccion">.</option>
                </Input>
                </Col>
                </Col>
                <Col sm={6}>
                <Label sm={12} className="ot-color label-input">3. TIPO DE CLIENTE <span className="text-danger">*</span> </Label>
                <Col >
                    <Input   type="select" name="tipoCliente" value={tipoCliente} onChange={handleChange} >
                        <option value="">Selecciona</option>
                        <option value="civil">.</option>
                        <option value="direccion">.</option>
                    </Input>
                </Col>               
                </Col>
            </FormGroup>
            <hr/>
            <FormGroup >
            <h6 className="ot-color">4. DATOS DEL CLIENTE</h6>
            <FormGroup>
                <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
                <Col sm={10}>
                    <Input  className="form-size" type="text" name="nombreCliente" value={nombreCliente} onChange={handleChange} /> 
                </Col> 
            </FormGroup>
            <FormGroup>
                <Label sm={12} >RFC </Label>
                <Col sm={6}>
                    <Input  type="text" name="rfcCliente" value={rfcCliente} onChange={handleChange}/> 
                </Col>
                
            </FormGroup>
                <Label sm={12} >Dirección  </Label>
                <Col sm={12}>
                <Input  type="text" name="direccionCliente" value={direccionCliente} onChange={handleChange} /> 
                </Col>
            </FormGroup>
            <FormGroup row>  
                <Col sm={6}>
                <Label sm={12}>Deleg/Municipio  </Label>
                <Col>
                <Input  type="text" name="delegacionCliente"     value={delegacionCliente} onChange={handleChange} /> 
                </Col>
                 </Col> 
                 <Col sm={6}>
               
                 <Label  sm={12}>Ciudad/EDO </Label>
                <Col>
                 <Input  type="text" name="EDOCliente"   value={EDOCliente} onChange={handleChange} />
                    </Col>
                 </Col>
            </FormGroup>
         
            <FormGroup>
                <Label  sm={12}>Atención </Label>
                <Col sm={6}>
                    <Input  type="text" name="atencion" value={atencion} onChange={handleChange} /> </Col>
            </FormGroup>
           
            <FormGroup row>  
                <Col sm={8}>
                <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                <Col>
                <Input    type="text" name="telCliente" value={telCliente} onChange={handleChange} />
                </Col>
                 </Col> 
                 <Col sm={4}>
                <Label sm={12}>Exten </Label>
                <Col>
                    <Input type="text"   name="extTel" value={extTel} onChange={handleChange} />
                    </Col>
                 </Col>
            </FormGroup>
            <FormGroup>
                <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                <Col sm={6} >
                <Input   type="email" name="emailCliente" value={emailCliente} onChange={handleChange} /> 
                </Col>
               
            </FormGroup>  
           
           
                <h6 className="ot-color">5. SOLICITANTE DEL AVALÚO</h6>
            <FormGroup>
                <Label sm={12}>Nombre Solicitante <span className="text-danger">*</span> </Label>
                <Col sm={10}>
                <Input  type="text" name="nombreSol" value={nombreSol} onChange={handleChange}  placeholder={nombreCliente}/> 
                </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12}> RFC </Label>
                <Col sm={6}>
                    <Input  type="text" name="rfcSol" value={rfcSol} onChange={handleChange} placeholder={rfcCliente} />
                </Col> 
            </FormGroup>
            <FormGroup>
                <Label sm={12}> Dirección </Label>
                <Col sm={12}>
                <Input  type="text" name="direccionSol" value={direccionSol} onChange={handleChange} placeholder={direccionCliente} /> 
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={6}>
                <Label sm={12}> Deleg/Municipio</Label> 
                <Col>
                <Input  type="text" name="delegacionSol" value={delegacionSol} onChange={handleChange} placeholder={delegacionCliente} /> 
                </Col>
                </Col>
                <Col sm={6}>
                <Label sm={12}> Ciudad/EDO </Label>
                <Col>
                <Input  type="text" name="EDOSol" value={EDOSol} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={8}>
                <Label sm={12}>Teléfono <span className="text-danger">*</span> </Label>
                <Col>
                <Input  type="text" name="telSol" value={telSol} onChange={handleChange}  placeholder={telCliente}/> 
                </Col>
                </Col>
                <Col sm={4}>
                <Label sm={12}>Exten</Label>
                <Col>
                <Input  type="text" name="extenSol" value={extenSol} onChange={handleChange} placeholder={extTel} /> 
                </Col>
                </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                <Col sm={6}> 
                <Input  type="email" name="emailSol" value={emailSol} onChange={handleChange} placeholder={emailCliente} /> 
                </Col>
            </FormGroup>
            <FormGroup>
            <Label sm={12}className="ot-color">6. OBJETIVO DEL AVALÚO <span className="text-danger">*</span> </Label>
                <Col sm={6}>
                
                <Input  type="select" name="objetivo" value={objetivo} onChange={handleChange}>
                    <option>Selecciona</option>
                    <option>n</option>
                    <option>n</option>
                </Input> 
                </Col>
            </FormGroup>
            <FormGroup>

                <Label sm={12}>Otro Objetivo </Label>
                <Col sm={6}>
                <Input  type="text" name="otroObj" value={otroObj} onChange={handleChange} /> 
                </Col>
            </FormGroup>
            <FormGroup>
            <Label sm={12} className="ot-color">7. PROPÓSITO DEL AVALÚO <span className="text-danger">*</span>  </Label>
                <Col sm={6}>
                <Input  type="select" name="proposito" value={proposito} onChange={handleChange} > 
                <option>Selecciona</option>
                <option>.</option>
                <option>.</option>
                <option>.</option>
                </Input>
                </Col>
            </FormGroup>
            <FormGroup>       
                <Label sm={12} >Otro Propósito</Label>
                <Col sm={6}>
                <Input type="text" name="otroProp" value={otroProp} onChange={handleChange} /> 
                </Col>
            </FormGroup>
            <h6 className="ot-color">8. INSPECCIÓN FÍSICA</h6>
            <FormGroup>
                
                <Label sm={12} >Presentarse con <span className="text-danger">*</span> </Label>
                <Col sm={10}>
                <Input  type="text" name="presentarse" value={presentarse} onChange={handleChange}  placeholder={nombreCliente}/> 
                </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12} >Visitador</Label>
                 <Col sm={6}>
                 <Input  type="text" name="visitador" value={visitador} onChange={handleChange} /> 
                 </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12}>Fecha <span className="text-danger">*</span>  </Label>
                <Col sm={6}>
                <Input type="date"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={8}>
                <Label sm={12}>Teléfono</Label>
                 <Col >
                 <Input  type="text" name="telInsp" value={telInsp} onChange={handleChange} placeholder={telCliente}/> 
                 </Col>
                </Col>
                <Col sm={4}>
                <Label sm={12} >Exten </Label>
                <Col >
                <Input  type="text" name="extenInsp" value={extInsp} onChange={handleChange}  placeholder={extTel}/> 
                </Col>
                </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12} >Correo </Label>
                <Col sm={6}>
                <Input  type="email" name="emailInsp" value={emailInsp} onChange={handleChange} placeholder={emailCliente} /> 
                </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12}>Direccion  <span className="text-danger">*</span> </Label>
                <Col sm={12}>
                <Input  type="text" name="dirInsp" value={dirInsp} onChange={handleChange}  placeholder={direccionCliente}/> 
                </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12} >Observaciones</Label>
                <Col sm={12}>
                <Input type="text" name="observaciones" value={observaciones} onChange={handleChange} /> 
                </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12} className="ot-color">9. BIENES A VALUAR<span className="text-danger">*</span> </Label>
                <Col sm={12}>
                <Input  type="text" name="bienes" value={bienes} onChange={handleChange} /> 
                </Col>
            </FormGroup>
           <FormGroup>
                <Label sm={12} >Otros Bienes </Label>
                <Col sm={12}>
                <Input type="text" name="otroBien" value={otroBien} onChange={handleChange} /> 
                </Col>
            </FormGroup>
            <hr/>
            <h6 className="ot-color">10. FECHAS <span className="text-danger">*</span> </h6>
            <FormGroup row>
                <Col sm={6}>
                <Label sm={12} >Inicio de Proyecto </Label>
                <Col >
                    <Input type="date"/>
                </Col>
                </Col>
                <Col sm={6}>
                <Label sm={12}>Entrega de Proyecto</Label>
                <Col>
                <Input type="date"/>
                </Col>
                </Col>
            </FormGroup>
            <hr/>
            <FormGroup>
            <Label sm={12}className="ot-color">11. INFORMACIÓN PROPORCIONADA</Label>
            <Col sm={12}>
            <Input  type="textarea" name="info" value={info} onChange={handleChange} /> 
            </Col>
            </FormGroup>
            <FormGroup>
            <Label sm={12}>Otra Información</Label>
            <Col sm={12}>
            <Input  type="textarea" name="otraInfo" value={otraInfo} onChange={handleChange} /> 
            </Col>
            </FormGroup>
            <hr/>
            <FormGroup row>
                 <Col sm={6}>
                <Label  sm={12}className="ot-color">PRESUPUESTO</Label>
                <Col >
                <Input  type="text" name="presupuesto" value={presupuesto} onChange={handleChange} /> 
                </Col>
                </Col>
                <Col sm={6}>
                <Label sm={12}className="ot-color">MONTO VENDIDO <span className="text-danger">*</span> </Label>
                <Col>
                <Input  type="text" name="montoVendido" value={montoVendido} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup> 
            <FormGroup >
                <Label sm={12} className="ot-color">ELABORO <span className="text-danger">*</span> </Label>
                <Col sm={6}>
                <Input  type="text" name="elaboro" value={elaboro} onChange={handleChange} /> 
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={6}>
                <Label sm={12}className="ot-color">ESTATUS <span className="text-danger">*</span> </Label>
                <Col>
                <Input  type="select" name="estatus" value={estatus} onChange={handleChange} >
                    <option>Selecciona</option>
                    <option>VENDIDO</option>
                    <option>EN PROCESO</option>
                    <option>CANCELADO</option>    
                </Input> 
                </Col>
                </Col>
                <Col sm={6}>
                <Label sm={12}className="ot-color">FACTURAR <span className="text-danger">*</span> </Label>
                <Col>
                <CustomInput  type="switch" name="facturar" value={facturar} onChange={handleChange} label="Selecciona"/> 
                </Col>
                </Col>
            </FormGroup>
            <hr/>
        <Button className="button-enviar" type="submit" >Enviar</Button><br/>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-inner"
          > 
          <div>
          <h5 className="text-danger text-center">¡Atencion!</h5>
          <hr/>
          <h6 className="text-danger text center">No se pudo enviar el formulario</h6>
                
            <div>Porfavor contesta todos los campos obligatorios</div>
                <hr/>   
                <Button onClick={closeModal} >Cerrar</Button>
         </div>
         </Modal>
        </Form>
        </div>
        )

    }
}
export default OrdenTrabajo;