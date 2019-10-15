import React from 'react';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


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
    bienes,otroBien,presupuesto, montoVendido, elaboro, estatus, facturar,modalIsOpen, productClave, dateNew, info, otraInfo, emailCliente, delegacionSol, extInsp, handleChange ,handleSubmit, closeModal, } = this.context
    
    return ( 
        //Ceacion formulario
        <div className="div-form">
            <h3 className="text-align-items title-style">Grupo Anepsa</h3>
        <Form  className="center-box style-form" onSubmit={handleSubmit}>
        <h5 className="ot-color ot-center">ORDEN DE TRABAJO</h5>
       
            <FormGroup  >
                 <Label >UGE <span className="text-danger">*</span>   </Label>
                 <Input className="width-input" type="text" name="uge" value={uge} onChange={handleChange}/>
                <Label  >Vendedor Ejecutivo <span className="text-danger">*</span> </Label>
                <Input  type="text" name="vendedor" value={vendedor} onChange={handleChange} />
                 <Label  >Fecha OT<span className="text-danger">*</span> </Label>
            <Input className="width-input" name="dateNew" value={dateNew} onChange={handleChange} type="date"/>
            <Label >Clave del proyecto <span className="text-danger">*</span> </Label>
                <Input  className="width-input" type="text"   readOnly="readonly" onSelect={this.productClave}  placeholder={productClave}/>  

             </FormGroup>
            <FormGroup >
                <Label >Copia para <span className="text-danger">*</span> </Label>
                <Input className="width-input" type="select" name="copia"  value={copia} onChange={handleChange}>
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
            </FormGroup>
        <FormGroup >
            <h6 className="ot-color label-input">1. TIPO DE OFERTA </h6>
            <Input className="width-input" type="text" name="oferta" value={oferta} onChange={handleChange} />
            
            <h6 className="ot-color label-input">1.1 CEDIDO DE  </h6>
            <Input className="width-input" type="text" name="cedido" value={cedido} onChange={handleChange} />
           
            <Label className="ot-color label-input">2. TIPO DE PROYECTO <span className="text-danger">*</span>  </Label>
            <Input className="width-input" type="text" name="proyecto" value={proyecto} onChange={handleChange} >
            <option value="">Selecciona</option>
            <option value="civil">.</option>
            <option value="direccion">.</option>
            </Input>
           
            <Label className="ot-color label-input">3. TIPO DE CLIENTE <span className="text-danger">*</span> </Label>

            <Input className="width-input" type="text" name="tipoCliente" value={tipoCliente} onChange={handleChange} >
            <option value="">Selecciona</option>
            <option value="civil">.</option>
            <option value="direccion">.</option>
            </Input>
            
        </FormGroup> 
            <FormGroup >
                
                <h6 className="ot-color">4. DATOS DEL CLIENTE</h6>
    
                <Label>Nombre <span className="text-danger">*</span>  </Label>
                    <Input  className="form-size" type="text" name="nombreCliente" value={nombreCliente} onChange={handleChange} />  
                <Label >RFC </Label>
                    <Input className="width-input" type="text" name="rfcCliente" value={rfcCliente} onChange={handleChange}/> 
                
                <Label >Dirección  </Label><Input  type="text" name="direccionCliente" value={direccionCliente} onChange={handleChange} /> 
                <Label >Deleg/Municipio  </Label><Input  type="text" name="delegacionCliente"    className="width-input" value={delegacionCliente} onChange={handleChange} /> 
                <Label >Ciudad/EDO </Label><Input  type="text" name="EDOCliente"  className="width-input" value={EDOCliente} onChange={handleChange} />
                <Label >Atención </Label><Input  type="text" name="atencion" value={atencion} onChange={handleChange} /> 
                <Label >Teléfono <span className="text-danger">*</span> </Label><Input  className="width-input"  type="text" name="telCliente" value={telCliente} onChange={handleChange} /> 
                <Label >Exten </Label><Input type="text"  className="width-input" name="extTel" value={extTel} onChange={handleChange} /> 
                <Label >Correo electronico <span className="text-danger">*</span> </Label><Input  className="width-input" type="email" name="emailCliente" value={emailCliente} onChange={handleChange} /> 
            </FormGroup><br/>
            <FormGroup>
                <h6 className="ot-color">5. SOLICITANTE DEL AVALÚO</h6>
                <Label >Nombre Solicitante <span className="text-danger">*</span> </Label><Input  type="text" name="nombreSol" value={nombreSol} onChange={handleChange}  placeholder={nombreCliente}/> 
                <Label >RFC </Label><Input className="width-input" type="text" name="rfcSol" value={rfcSol} onChange={handleChange} placeholder={rfcCliente} /> 
                <Label >Dirección </Label><Input  type="text" name="direccionSol" value={direccionSol} onChange={handleChange} placeholder={direccionCliente} /> 
                <Label >Deleg/Municipio</Label> <Input className="width-input" type="text" name="delegacionSol" value={delegacionSol} onChange={handleChange} placeholder={delegacionCliente} /> 
                <Label >Ciudad/EDO </Label><Input className="width-input" type="text" name="EDOSol" value={EDOSol} onChange={handleChange} /> 
                <Label >Teléfono <span className="text-danger">*</span> </Label><Input className="width-input" type="text" name="telSol" value={telSol} onChange={handleChange}  placeholder={telCliente}/> 
                <Label >Exten</Label><Input className="width-input" type="text" name="extenSol" value={extenSol} onChange={handleChange} placeholder={extTel} /> 
                <Label >Correo electronico <span className="text-danger">*</span> </Label><Input className="width-input" type="email" name="emailSol" value={emailSol} onChange={handleChange} placeholder={emailCliente} /> 
            </FormGroup><br/>
            <FormGroup>
            <h6 className="ot-color">6. OBJETIVO DEL AVALÚO <span className="text-danger">*</span> </h6>
                <Input  type="text" name="objetivo" value={objetivo} onChange={handleChange} /> 
                <Label >Otro Objetivo </Label><Input  type="text" name="otroObj" value={otroObj} onChange={handleChange} /> 
            </FormGroup>

            <FormGroup>
            <h6 className="ot-color">7. PROPÓSITO DEL AVALÚO <span className="text-danger">*</span>  </h6>
                <Input  type="text" name="proposito" value={proposito} onChange={handleChange} /> 
                <Label >Otro Propósito</Label><Input type="text" name="otroProp" value={otroProp} onChange={handleChange} /> 
            </FormGroup><br/>

            <FormGroup>
                <h6 className="ot-color">8. INSPECCIÓN FÍSICA</h6>
                <Label >Presentarse con <span className="text-danger">*</span> </Label> <Input  type="text" name="presentarse" value={presentarse} onChange={handleChange}  placeholder={nombreCliente}/> 
                <Label >Visitador</Label> <Input  type="text" name="visitador" value={visitador} onChange={handleChange} /> 
                <Label >Fecha <span className="text-danger">*</span>  </Label>
                <Input type="date"/>
                <Label >Teléfono</Label> <Input className="width-input" type="text" name="telInsp" value={telInsp} onChange={handleChange} placeholder={telCliente}/> 
                <Label >Exten </Label><Input className="width-input" type="text" name="extenInsp" value={extInsp} onChange={handleChange}  placeholder={extTel}/> 
                <Label >Correo </Label><Input className="width-input" type="email" name="emailInsp" value={emailInsp} onChange={handleChange} placeholder={emailCliente} /> 
                <Label >Direccion  <span className="text-danger">*</span> </Label><Input  type="text" name="dirInsp" value={dirInsp} onChange={handleChange}  placeholder={direccionCliente}/> 
                <Label >Observaciones</Label><Input type="text" name="observaciones" value={observaciones} onChange={handleChange} /> 
            </FormGroup><br/>

            <FormGroup>
                <h6 className="ot-color">9. BIENES A VALUAR<span className="text-danger">*</span> </h6>
                <Label ></Label><Input  type="text" name="bienes" value={bienes} onChange={handleChange} /> 
                <Label >Otros Bienes </Label><Input type="text" name="otroBien" value={otroBien} onChange={handleChange} /> 
            </FormGroup><br/>
            <FormGroup>
            <h6 className="ot-color">10. FECHAS <span className="text-danger">*</span> </h6>
                <Label >Inicio de Proyecto </Label>
                <div>
                <Input type="date"/>
                </div>
                <Label >Entrega de Proyecto</Label>
                <div>
                <Input type="date"/>
                </div>
                  
            </FormGroup><br/>
            <FormGroup>
            <h6 className="ot-color">11. INFORMACIÓN PROPORCIONADA</h6>
            <Input  type="textarea" name="info" value={info} onChange={handleChange} /> 
            <Label >Otra Información</Label><Input  type="textarea" name="otraInfo" value={otraInfo} onChange={handleChange} /> 
            </FormGroup><br/>
            <FormGroup>
                <Label className="ot-color">PRESUPUESTO</Label>
                <Input className="width-input" type="text" name="presupuesto" value={presupuesto} onChange={handleChange} /> 
                <Label className="ot-color">MONTO VENDIDO <span className="text-danger">*</span> </Label>
                <Input className="width-input" type="text" name="montoVendido" value={montoVendido} onChange={handleChange} /> 
                <Label className="ot-color">ELABORO <span className="text-danger">*</span> </Label>
                <Input className="width-input" type="text" name="elaboro" value={elaboro} onChange={handleChange} /> 
                <Label className="ot-color">ESTATUS <span className="text-danger">*</span> </Label>
                <Input className="width-input" type="text" name="estatus" value={estatus} onChange={handleChange} /> 
                <Label className="ot-color">FACTURAR <span className="text-danger">*</span> </Label>
                <Input className="width-input" type="text" name="facturar" value={facturar} onChange={handleChange} /> 
            </FormGroup> 
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