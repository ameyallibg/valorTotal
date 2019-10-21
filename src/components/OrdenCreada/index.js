
// import React from 'react';

// import {  Form, FormGroup, Label, Input, Col} from 'reactstrap';




// class OrdenCreada extends React.Component {
//     render() {
//         const{ consulta} = this.context
//         return (
//             <div className="div-form">
//             <h3 className="text-align-items title-style">.</h3>
//         <Form  className="center-box style-form" >
//         <h5 className="ot-color ot-center">ORDEN DE TRABAJO CREADA</h5>
        
       
//             <FormGroup  >
//             <FormGroup row> <Label  sm={2}> UGE</Label>
//             <p>{consulta.productClave}</p>
//             <Col sm={10}><Input className="width-input" type="text" name="uge" /> </Col>
//             </FormGroup>
                 
                 
//                 <Label  >Vendedor Ejecutivo  </Label>
//                 <Input  type="text" name="vendedor"   />
               
//                  <Label  >Fecha OT </Label>
//                  <Input className="width-input" name="dateNew"   type="text"/>

//                 <Label >Clave del proyecto </Label>
//                 <Input  className="width-input" type="text"   /> 
                

//              </FormGroup>
//             <FormGroup >
//                 <Label >Copia para </Label>
//                 <Input className="width-input" type="text" name="copia"   />
                   
               
//             </FormGroup>
//         <FormGroup >
//             <h6 className="ot-color label-input">1. TIPO DE OFERTA </h6>
//             <Input className="width-input" type="text" name="oferta" />
            
//             <h6 className="ot-color label-input">1.1 CEDIDO DE  </h6>
//             <Input className="width-input" type="text" name="cedido"   />
           
//             <Label className="ot-color label-input">2. TIPO DE PROYECTO   </Label>
//             <Input className="width-input" type="text" name="proyecto" >
//             <option value="">Selecciona</option>
//             <option value="civil">.</option>
//             <option value="direccion">.</option>
//             </Input>
           
//             <Label className="ot-color label-input">3. TIPO DE CLIENTE </Label>

//             <Input className="width-input" type="text" name="tipoCliente"   >
//             <option value="">Selecciona</option>
//             <option value="civil">.</option>
//             <option value="direccion">.</option>
//             </Input>
            
//         </FormGroup> 
//             <FormGroup >
                
//                 <h6 className="ot-color">4. DATOS DEL CLIENTE</h6>
    
//                 <Label>Nombre </Label>
//                     <Input  className="form-size" type="text" name="nombreCliente"  />  
//                 <Label >RFC </Label>
//                     <Input className="width-input" type="text" name="rfcCliente"  /> 
                
//                 <Label >Dirección  </Label><Input  type="text" name="direccionCliente"  /> 
//                 <Label >Deleg/Municipio  </Label><Input  type="text" name="delegacionCliente"    className="width-input"   /> 
//                 <Label >Ciudad/EDO </Label><Input  type="text" name="EDOCliente"  className="width-input"   />
//                 <Label >Atención </Label><Input  type="text" name="atencion"   /> 
//                 <Label >Teléfono </Label><Input  className="width-input"  type="text" name="telCliente"  /> 
//                 <Label >Exten </Label><Input type="text"  className="width-input" name="extTel"  /> 
//                 <Label >Correo electronico </Label><Input  className="width-input" type="email" name="emailCliente"  /> 
//             </FormGroup><br/>
//             <FormGroup>
//                 <h6 className="ot-color">5. SOLICITANTE DEL AVALÚO</h6>
//                 <Label >Nombre Solicitante </Label><Input  type="text" name="nombreSol"  /> 
//                 <Label >RFC </Label><Input className="width-input" type="text" name="rfcSol"   /> 
//                 <Label >Dirección </Label><Input  type="text" name="direccionSol" /> 
//                 <Label >Deleg/Municipio</Label> <Input className="width-input" type="text" name="delegacionSol" /> 
//                 <Label >Ciudad/EDO </Label><Input className="width-input" type="text" name="EDOSol" /> 
//                 <Label >Teléfono </Label><Input className="width-input" type="text" name="telSol" /> 
//                 <Label >Exten</Label><Input className="width-input" type="text" name="extenSol" /> 
//                 <Label >Correo electronico </Label><Input className="width-input" type="email" name="emailSol" /> 
//             </FormGroup><br/>
//             <FormGroup>
//             <h6 className="ot-color">6. OBJETIVO DEL AVALÚO </h6>
//                 <Input  type="text" name="objetivo" /> 
//                 <Label >Otro Objetivo </Label><Input  type="text" name="otroObj"  /> 
//             </FormGroup>

//             <FormGroup>
//             <h6 className="ot-color">7. PROPÓSITO DEL AVALÚO  </h6>
//                 <Input  type="text" name="proposito"  /> 
//                 <Label >Otro Propósito</Label><Input type="text" name="otroProp"   /> 
//             </FormGroup><br/>

//             <FormGroup>
//                 <h6 className="ot-color">8. INSPECCIÓN FÍSICA</h6>
//                 <Label >Presentarse con </Label> <Input  type="text" name="presentarse"    /> 
//                 <Label >Visitador</Label> <Input  type="text" name="visitador"  /> 
//                 <Label >Fecha  </Label>
//                 <Input type="date"/>
//                 <Label >Teléfono</Label> <Input className="width-input" type="text" name="telInsp"/> 
//                 <Label >Exten </Label><Input className="width-input" type="text" name="extenInsp" /> 
//                 <Label >Correo </Label><Input className="width-input" type="email" name="emailInsp"  /> 
//                 <Label >Direccion  </Label><Input  type="text" name="dirInsp" /> 
//                 <Label >Observaciones</Label><Input type="text" name="observaciones"  /> 
//             </FormGroup><br/>

//             <FormGroup>
//                 <h6 className="ot-color">9. BIENES A VALUAR</h6>
//                 <Label ></Label><Input  type="text" name="bienes"  /> 
//                 <Label >Otros Bienes </Label><Input type="text" name="otroBien"   /> 
//             </FormGroup><br/>
//             <FormGroup>
//             <h6 className="ot-color">10. FECHAS </h6>
//                 <Label >Inicio de Proyecto </Label>
//                 <div>
//                 <Input type="date"/>
//                 </div>
//                 <Label >Entrega de Proyecto</Label>
//                 <div>
//                 <Input type="date"/>
//                 </div>
                  
//             </FormGroup><br/>
//             <FormGroup>
//             <h6 className="ot-color">11. INFORMACIÓN PROPORCIONADA</h6>
//             <Input  type="textarea" name="info"   /> 
//             <Label >Otra Información</Label><Input  type="textarea" name="otraInfo"   /> 
//             </FormGroup><br/>
//             <FormGroup>
//                 <Label className="ot-color">PRESUPUESTO</Label>
//                 <Input className="width-input" type="text" name="presupuesto" /> 
//                 <Label className="ot-color">MONTO VENDIDO </Label>
//                 <Input className="width-input" type="text" name="montoVendido"   /> 
//                 <Label className="ot-color">ELABORO </Label>
//                 <Input className="width-input" type="text" name="elaboro"   /> 
//                 <Label className="ot-color">ESTATUS </Label>
//                 <Input className="width-input" type="text" name="estatus"   /> 
//                 <Label className="ot-color">FACTURAR </Label>
//                 <Input className="width-input" type="text" name="facturar"   /> 
//             </FormGroup> 
//         </Form>
//         </div>
//         )
// }
// }


// export default OrdenCreada
