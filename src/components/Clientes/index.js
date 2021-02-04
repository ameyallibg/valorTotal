import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import CrearCliente from './CrearCliente';
import EditarCliente from './EditarCliente'
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Link } from 'react-router-dom';
import db from "../../Fire.js";



import { AppContext} from "../../AppContext";
EditarCliente.contextType =AppContext
CrearCliente.contextType =AppContext;



class  ListadoClientes extends React.Component {
  constructor() {
    super();

    this.onDelete = this.onDelete.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this)

 
  }

  onDelete(e){
       
    const newid=  e.target.value
    console.log(newid)
    db.collection("clientes").where("clave", "==", newid )
    .get()
    .then(querySnapshot => {
     querySnapshot.forEach((doc) => {
       doc.ref.delete().then(() => {
         console.log("Document successfully deleted!");
       }).catch(function(error) {
         console.error("Error removing document: ", error);
       });
     });
   })
   .catch(function(error) {
     console.log("Error getting documents: ", error);
   });
   }

   deleteFilter() {

    const {obtenerClientes} = this.context;
    document.getElementsByName("buscadorClave")[0].value = "";
    document.getElementsByName("buscadorNombre")[0].value = "";
    document.getElementsByName("buscadorEmpresa")[0].value = "";
    document.getElementsByName("fechaCliente")[0].value = "";
    document.getElementsByName("nombreVendedor")[0].value= "";
    document.getElementsByName("estatus")[0].value="";
    document.getElementsByName("area")[0].value="";
    document.getElementsByName("holding")[0].value="";
    document.getElementsByName("cargo")[0].value="";
    document.getElementsByName("servicios")[0].value="";
    document.getElementsByName("fechaCliente")[0].value="";
    db.collection("clientes").onSnapshot(obtenerClientes)

  
  }


  render () {
    const{  rol,dataClientes, onClickItemCliente, handleChangeCliente, crearNuevo}=this.context
    if(rol === "admin"){ 
    return (
        
      <div>
                  <Link  className="text-white " to="/CrearCliente" onClick={crearNuevo} ><Button className='mt-2 mb-2 mr-3 float-right'  color="success ">Crear</Button></Link>    
                  <Table>
                  <thead>
                </thead>
                <tbody>
          <tr  className="filtrar-style">
            
            <th  colspan="2">Filtrar por</th>
            
          <th  colspan="2">
            <Input type="text" name="buscadorClave" onChange={handleChangeCliente} placeholder="Clave" >
            </Input>
            
          </th>
       
          <th  colspan="2">
          <Input type="text" name="buscadorNombre" onChange={handleChangeCliente}  placeholder="Cliente" >
            </Input>
          </th>
          <th  colspan="2">
            <Input type="text" name="buscadorEmpresa" onChange={handleChangeCliente} placeholder="Empresa" >
            </Input>
            
          </th>
          <th colspan="2" >
            <Input type="select" name="nombreVendedor" onChange={handleChangeCliente} >
                <option value="">Vendedor</option>
                <option value="AMEYALLI BRITO GONZÁLEZ">Ame</option>
                        <option value="YOZEBETH BRITO GONZÁLEZ">Yoz</option>
                      
               
            </Input>
          </th>
         
          <th>
             <Input type="select" name="estatus" onChange={handleChangeCliente} >
                <option value="" >Estatus</option>
                <option value="perdido">Perdido</option>
                <option value="contacto inicial">Contacto Inicial</option>
                <option value="posible cierre">Posible Cierre</option>
                <option value="estancado">Estancado</option>
                <option value="vendido">Vendido</option>

            </Input>
          </th>
          <th><Button   color="warning text-white" onClick={this.deleteFilter}><RotateLeftIcon/> </Button></th>
        </tr>
        <tr>
        <th colspan="2"></th>
        <th  colspan="2"><Input type="select"  name="area" onChange={handleChangeCliente} >
                        <option value="" selected>Area</option>
                        <option value="CIVIL">Civil</option>
                         <option value="FINANCIERA">Financiera</option>
                         <option value="INDUSTRIAL">Industrial</option>
                         <option value="CIVIL-INDUSTRIAL">Civil-Industrial</option>
                         <option value="CIVIL-FINANCIERA">Civil-Financiera</option>
                         <option value="FINANCIERA-INDUSTRIAL">Financiera-Industrial</option>
                         <option value="CIVIL-FINANCIERA-INDUSTRIAL">Civil-Financiera-Industrial</option>
            </Input>
            </th>
          <th colspan="2">
          <Input  type="select" name="holding" onChange={handleChangeCliente} >
                <option value="">Holding</option>
                <option value="Anepsa">Anepsa</option>
                <option value="Syvaprec">Syvaprec</option>
                <option value="SAAF">SAAF</option>
                <option value="otro">otro</option>
                                    
            </Input> 
            </th>
          <th colspan="2"><Input type="text" name="cargo" onChange={handleChangeCliente}  placeholder="Cargo Empresa" >
            </Input></th>
          <th colspan="2">
          <Input  type="select" name="servicios" onChange={handleChangeCliente} >
                <option value="">Servicio</option>
                    <option value="AVALÚO BANCARIO">Avalúo Bancario</option>
                    <option value="AVALÚO CATASTRAL">Avalúo Catastral</option>
                    <option value="AVALÚO COMERCIAL">Avalúo Comercial</option>
                    <option value="AVALÚO INDUSTRIAL COMERCIAL">Avalúo Industrial Comercial</option>
                    <option value="AVALÚO INDUSTRIAL VALOR RAZONABLE">Avalúo Industrial Valor Razonable</option>
                    <option value="AVALÚO INDUSTRIAL VRN">Avalúo Industrial VRN</option>
                    <option value="AVALÚO SEGUROS">Avalúo Seguros</option>
                    <option value="AVALÚO SHF">Avalúo SHF</option>
                    <option value="CAF">CAF</option>
                    <option value="CAPACITACIÓN">Capacitación</option>
                    <option value="C6">C6</option>
                    <option value="C15">C15</option>
                    <option value="INVENTARIO  ACTIVO FIJO">Inventario  Activo Fijo</option>
                    <option value="INVENTARIO DE CIRCULANTE">Inventario de Circulante</option>
                    <option value="MARCA">Marca</option>
                    <option value="NEGOCIO EN MARCHA">Negocio en Marcha</option>
                    <option value="NORMA INTERNACIONAL">Norma Internacional</option>
                    <option value="NEGOCIACIÓN">NEGOCIACIÓN</option>
                    <option value="SAAF">SAAF</option>
                    <option value="PLACAS">Placas</option>
                    <option value="OTRO OBJETIVO">Otro</option>

                </Input> 
            
            </th>
            <th>
          <Input type="date" name="fechaCliente" onChange={handleChangeCliente} >
            Fecha
            </Input>
          </th>
          
          
          </tr>
        
        </tbody>
 
      <thead>
       
        <tr  className="tabla-style">
        

          
          <th className="text-center"><FolderOpenIcon/></th>
          <th >Clave</th>
          <th>Cliente</th>
          <th>Empresa</th>
          <th>Vendedor</th>
          <th>Cargo Empresa</th>
          <th>Area</th>
          <th>Holding</th>
          <th>Servicio</th>
          <th>Estatus</th>
          <th>Fecha</th>
          
          <th></th>
          
        </tr>
       
      </thead>
      
      <tbody>
      {dataClientes.map(item =>(
            
            
     
        <tr  className="list">
         
          <td className="text-center"><Button className="mr-1 clave " color="white"  value={item.clave} onClick={onClickItemCliente}></Button>
              <Button color="white" className="busqueda" value={item.clave} onClick={onClickItemCliente}></Button></td>
          <td>{item.clave}</td>
          <td>{item.nombre}</td>
          <td>{item.empresa}</td>
          <td>{item.vendedor}</td>
          <td>{item.cargo}</td>
          <td>{item.area}</td>
          <td>{item.holding}</td>
          <td>{item.servicios}</td>
          <td>{item.estatus}</td>
          <td>{item.getNewDate}</td>
          
          <td><Button color="white" className="borrar" value={item.clave} onClick={this.onDelete}></Button></td>
        </tr>
     
        ))
      }
      </tbody>
     
      </Table>
  
  <EditarCliente/>
  
    </div>
  );
}else{
  return(
                <div>
                <Link  className="text-white " to="/CrearCliente"><Button className='mt-2 mb-2 mr-3 float-right' color="success ">Crear</Button></Link>    
                <Table>
                <thead>
              </thead>
              <tbody>
          <tr  className="filtrar-style">
            
            <th  colspan="2">Filtrar por</th>
            
          <th  colspan="2">
            <Input type="text" name="buscadorClave" onChange={handleChangeCliente} placeholder="Clave" >
            </Input>
            
          </th>
       
          <th  colspan="2">
          <Input type="text" name="buscadorNombre" onChange={handleChangeCliente}  placeholder="Cliente" >
            </Input>
          </th>
          <th  colspan="2">
            <Input type="text" name="buscadorEmpresa" onChange={handleChangeCliente} placeholder="Empresa" >
            </Input>
            
          </th>
          <th colspan="2" >
            <Input type="select" name="nombreVendedor" onChange={handleChangeCliente} >
                <option value="">Vendedor</option>
                <option value="Ameyalli Brito González">Ame</option>
                        <option value="Yozebeth Brito González">Yoz</option>
                  
                
            </Input>
          </th>
         
          <th>
             <Input type="select" name="estatus" onChange={handleChangeCliente} >
                <option value="" >Estatus</option>
                <option value="perdido">Perdido</option>
                <option value="contacto inicial">Contacto Inicial</option>
                <option value="posible cierre">Posible Cierre</option>
                <option value="estancado">Estancado</option>
                <option value="vendido">Vendido</option>

            </Input>
          </th>
          <th><Button   color="warning text-white" onClick={this.deleteFilter}><RotateLeftIcon/> </Button></th>
        </tr>
        <tr>
        <th colspan="2"></th>
        <th  colspan="2"><Input type="select"  name="area" onChange={handleChangeCliente} >
                        <option value="" selected>Area</option>
                        <option value="CIVIL">CIVIL</option>
                         <option value="FINANCIERA">FINANCIERA</option>
                         <option value="INDUSTRIAL">INDUSTRIAL</option>
                         <option value="CIVIL-INDUSTRIAL">CIVIL-INDUSTRIAL</option>
                         <option value="CIVIL-FINANCIERA">CIVIL-FINANCIERA</option>
                         <option value="FINANCIERA-INDUSTRIAL">FINANCIERA-INDUSTRIAL</option>
                         <option value="CIVIL-FINANCIERA-INDUSTRIAL">CIVIL-FINANCIERA-INDUSTRIAL</option>
            </Input>
            </th>
          <th colspan="2">
          <Input  type="select" name="holding" onChange={handleChangeCliente} >
                <option value="">Holding</option>
                <option value="Anepsa">Anepsa</option>
                <option value="Syvaprec">Syvaprec</option>
                <option value="SAAF">SAAF</option>
                <option value="otro">otro</option>
                                    
            </Input> 
            </th>
          <th colspan="2"><Input type="text" name="cargo" onChange={handleChangeCliente}  placeholder="Cargo Empresa" >
            </Input></th>
          <th colspan="2">
          <Input  type="select" name="servicios" onChange={handleChangeCliente} >
                <option value="">Servicio</option>
                    <option value="AVALÚO BANCARIO">AVALÚO BANCARIO</option>
                    <option value="AVALÚO CATASTRAL">AVALÚO CATASTRAL</option>
                    <option value="AVALÚO COMERCIAL">AVALÚO COMERCIAL</option>
                    <option value="AVALÚO INDUSTRIAL COMERCIAL">AVALÚO INDUSTRIAL COMERCIAL</option>
                    <option value="AVALÚO INDUSTRIAL VALOR RAZONABLE">AVALÚO INDUSTRIAL VALOR RAZONABLE</option>
                    <option value="AVALÚO INDUSTRIAL VRN">AVALÚO INDUSTRIAL VRN</option>
                    <option value="AVALÚO SEGUROS">AVALÚO SEGUROS</option>
                    <option value="AVALÚO SHF">AVALÚO SHF</option>
                    <option value="CAF">CAF</option>
                    <option value="CAPACITACIÓN">CAPACITACIÓN</option>
                    <option value="C6">C6</option>
                    <option value="C15">C15</option>
                    <option value="INVENTARIO  ACTIVO FIJO">INVENTARIO  ACTIVO FIJO</option>
                    <option value="INVENTARIO DE CIRCULANTE">INVENTARIO DE CIRCULANTE</option>
                    <option value="MARCA">MARCA</option>
                    <option value="NEGOCIO EN MARCHA">NEGOCIO EN MARCHA</option>
                    <option value="NORMA INTERNACIONAL">NORMA INTERNACIONAL</option>
                    <option value="NEGOCIACIÓN">NEGOCIACIÓN</option>
                    <option value="SAAF">SAAF</option>
                    <option value="PLACAS">PLACAS</option>
                    <option value="OTRO OBJETIVO">OTRO OBJETIVO</option>

                </Input> 
            
            </th>
            <th>
          <Input type="date" name="fechaCliente" onChange={handleChangeCliente} >
            Fecha
            </Input>
          </th>
          
          
          </tr>
        
        </tbody>
              <thead>

              <tr  className="tabla-style">
              <th className="text-center"><FolderOpenIcon/></th>
              <th >Clave</th>
              <th>Cliente</th>
              <th>Empresa</th>
              <th>Vendedor</th>
              <th>Cargo Empresa</th>
              <th>Area</th>
              <th>Holding</th>
              <th>Servicio</th>
              <th>Estatus</th>
              <th>Fecha</th>
              <th></th>
              </tr>

              </thead>

              <tbody>
              {dataClientes.map(item =>(



              <tr  className="list">
              <td className="text-center"><Button className="mr-1 clave" color="white" value={item.clave} onClick={onClickItemCliente}></Button>
              <Button color="white" id="clave" value={item.clave} className="busqueda" onClick={onClickItemCliente}></Button></td>
              <td>{item.clave}</td>
              <td>{item.nombre}</td>
              <td>{item.empresa}</td>
              <td>{item.vendedor}</td>
              <td>{item.cargo}</td>
              <td>{item.area}</td>
              <td>{item.holding}</td>
              <td>{item.servicios}</td>
              <td>{item.estatus}</td>
              <td>{item.getNewDate}</td>
              <td></td>
              </tr>

              ))
              }
              </tbody>

              </Table>

              <EditarCliente/>

              </div>
              );


}
}
}


export default ListadoClientes;