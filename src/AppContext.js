  
import React, { Component } from "react";
import db from "./Fire.js";
import firebase from 'firebase';





export const AppContext = React.createContext()

 export class AppContextProvider extends Component {
    constructor(props){
        super(props)
        //Datos que se obtienen de las respuestas del formulario
        this.state ={
            vendedor:"",
            uge:"",
            estatus:"",
            productClave:"",
            // dateNew: new Date().toLocaleString(),
            items:[] ,
            newcontador: 0,
            mes: [],
            getDate:[],
            consulta:[],
            buscador:"",
            newestatus:"",
            getName:"",
            modalIsOpen:false,
           
            
           
        }
    this.onClickItem = this.onClickItem.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate= this.handleChangeDate.bind(this)
    this.handleChangeFound = this.handleChangeFound.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this)
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChangeSeller = this.handleChangeSeller.bind(this);
    this.handleChangeProject = this.handleChangeProject.bind(this)
  
    }
    //Funcion para cuando aparece el modal
    openModal() {
        this.setState({modalIsOpen: true});
      }

    closeModal() {
        this.setState({modalIsOpen: false});
      }
   //Actualizacion del estado por cada cambio de valor
    handleChange = (e)=>{
        
        this.setState({ 
            [e.target.name]:e.target.value
        })
        console.log(this.state)
        
        
    } 


    handleChangeFound= (e)=>{
        
      const handle = e.target.value
      
      console.log(handle)
      console.log(this.state.buscador)
      if(handle === ""){
       
        db.collection("orden").onSnapshot(this.obtenerBD)
     
        }else {
          db.collection("orden").where("productClave", "==", handle )
          .get()
          .then(querySnapshot => {
              const data = querySnapshot.docs.map(doc => doc.data());
                  
                  this.setState({
                    items:data
    
                  })
                  
                  
              });
        }
      
      
  } 
  handleChangeSeller= (e)=>{
        
    const handle = e.target.value
    
    console.log(handle)
   
    if(handle === ""){
     
      db.collection("orden").onSnapshot(this.obtenerBD)
   
      }else {
        db.collection("orden").where("vendedor", "==", handle )
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  items:data
  
                })
                
                
            });
      }
    
    
} 
handleChangeProject= (e)=>{
        
  const handle = e.target.value
  
  console.log(handle)
  console.log(this.state.buscador)
  if(handle === ""){
   
    db.collection("orden").onSnapshot(this.obtenerBD)
 
    }else {
      db.collection("orden").where("uge", "==", handle )
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });
    }
  
  
} 
  handleChangeDate = (e) =>{

    const handle = e.target.value.replace(/-/g,"/")
      
    console.log(handle)
    
    if(handle === ""){
     
      db.collection("orden").onSnapshot(this.obtenerBD)
   
      }else {
        db.collection("orden").where("getNewDate", "==", handle )
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  items:data
                })         
            });
      }
  }

  handleChangeSelect = (e) =>{

    const handle = e.target.value
      
    console.log(handle)
    
    if(handle === "estatus"){
     
      db.collection("orden").onSnapshot(this.obtenerBD)
   
      }else {
        db.collection("orden").where("estatus", "==", handle )
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  items:data
  
                })
                
                
            });
      }
    
  

  }
    handleUpdate=(e) =>{
      
      if(this.state.getName === this.state.vendedor ){
        
        this.setState({ 
            [e.target.name]:e.target.value
        })
        console.log(this.state)
        
    }else {
      console.log("no sirvo ")
    }
  }
    

    //Validacion del formulario
    handleSubmit = (e)  => {
        
        e.preventDefault();
        if(!this.validate()){
            return
        }
        
            
            
            let obtDate= new Date().toLocaleString();
            console.log(obtDate)
            const ugeClave = this.state.uge.substr(0,3).toUpperCase(); 
            const dateClave = obtDate.substr(2,3).replace("/","")
            const newDate = obtDate.slice(6, 8)
            
            console.log(dateClave)
            console.log(this.state.mes)
            console.log(newDate)
            console.log(this.state.getDate)
           
            

           
           if(dateClave ===
             this.state.mes){
              
              let contador = parseInt(this.state.getDate) + 1 ;

           
                   
              if( contador < 10){ 
                const claveUnica = newDate+ dateClave + ugeClave + '00'+ contador
          
            
                document.getElementById("formClear").reset();

               
                
                db.collection("orden").add({
                
                  vendedor: this.state.vendedor,
                  uge: this.state.uge,
                 
                  estatus: this.state.estatus,
                  productClave: claveUnica,
                  contador: contador,
                  mes:dateClave,
                  date: new Date().toLocaleString(),
                  getNewDate: new Date().toLocaleDateString("zh-TW"),
               })

              this.setState({
                 vendedor:"",
                 uge:"",
                 fecha:"",
                 estatus:"",
                 productClave:"",
                 newcontador: contador,
                 dateNew: new Date().toLocaleString(),
                 getNewDate: new Date().toLocaleDateString(),

      
              }, () => {console.log(this.state.mes)})
              } else if(contador < 100 && contador > 10){
                const claveUnica = newDate + dateClave + ugeClave + '0'+ contador
          
            
                document.getElementById("formClear").reset();
                
                db.collection("orden").add({
                
                   
                  vendedor: this.state.vendedor,
                  uge: this.state.uge,
                 
                  estatus: this.state.estatus,
                  productClave: claveUnica,
                  contador: contador,
                  mes:dateClave,
                  date: new Date().toLocaleString(),
                  getNewDate: new Date().toLocaleDateString("zh-TW"),
                
               })
      
              
              
              this.setState({
                vendedor:"",
                uge:"",
                fecha:"",
                estatus:"",
                productClave:"",
                newcontador: contador,
                dateNew: new Date().toLocaleString(),
                getNewDate: new Date().toLocaleDateString(),
              })
              } else { 
                const claveUnica = newDate + dateClave + ugeClave + contador
          
            
                document.getElementById("formClear").reset();
                
                db.collection("orden").add({
                
                 
                  vendedor: this.state.vendedor,
                  uge: this.state.uge,
                 
                  estatus: this.state.estatus,
                  productClave: claveUnica,
                  contador: contador,
                  mes:dateClave,
                  date: new Date().toLocaleString(),
                  getNewDate: new Date().toLocaleDateString("zh-TW"),
                  
                
               })
      
              
              
              this.setState({
                vendedor:"",
                uge:"",
                fecha:"",
                estatus:"",
                productClave:"",
                newcontador: contador,
                dateNew: new Date().toLocaleString(),
                getNewDate: new Date().toLocaleDateString(),
      
              })
              }
                
   
    }
   else {
    

    const contador = 1;


      const claveUnica = dateClave + ugeClave + '00'+ contador

  
      document.getElementById("formClear").reset();

     
      
      db.collection("orden").add({
      
        vendedor: this.state.vendedor,
        uge: this.state.uge,
        dateNew: this.state.dateNew,
        estatus: this.state.estatus,
        productClave: claveUnica,
        contador: contador,
        mes:newDate,
      
     })

    

    
    
    this.setState({
       vendedor:"",
       uge:"",
       fecha:"",
       estatus:"",
       productClave:"",
       getDate: contador,

    }, () => {console.log(this.state.mes)})
  }

  
  }

  handleLogout(){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  obtenerUser= ()=>{
    const usuario = this.state.user

    db.collection("usuarios").where("email","==",  usuario ).get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      
      const getUser = data[0].name
      console.log(getUser)
      
      
           

            
  
            this.setState({ getName: getUser })
          }) 
   
    
  }

    componentDidMount() {

       db.collection("orden").onSnapshot(this.obtenerBD)
       db.collection("usuarios").onSnapshot(this.obtenerUser)
       const user =  firebase.auth().currentUser.email
       this.setState({
         user:user,
         dateNew: new Date().toLocaleDateString()
       })
       
      }

      obtenerBD=()=>{
        db.collection("orden").orderBy("date", "desc")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data)
            this.setState({ items: data });
          }, console.log(this.state.items));

          db.collection("orden").orderBy("date", "desc").limit(1)
          .get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
           const newobj = data[0].contador
           const newmes = data[0].mes
           console.log(newobj, newmes)

            
  
            this.setState({ getDate: newobj, mes:newmes })
          })
      }


    
    onClickItem(e){
      
      
     let newid=  e.target.id
     console.log(newid)
   
     
      db.collection("orden").where("productClave", "==", newid)
    .get()
    .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
            
            console.log(data);
            this.setState({ consulta: data , modalIsOpen:true})
            
        });
    
       
          

    }

    deleteFilter() {
      document.getElementsByName("estatus")[0].value  = "";
      document.getElementsByName("buscador")[0].value = "";
      document.getElementsByName("fechaBuscador")[0].value = "";
      document.getElementsByName("nombreVendedor")[0].value= "";
      document.getElementsByName("tipoProyecto")[0].value="";
      db.collection("orden").onSnapshot(this.obtenerBD)

    
    }
    
    validate(){
        const state = this.state.uge
       
        if(state === '' ){
            this.setState({
                modalIsOpen:true,
                message:'Contesta los campos obligatorios'

            })
              
                return   false
         

           
        }
       
        this.setState({
          modalIsOpen:true,
          message:'Se ha enviado correctamente'

      })
        return true
    }
    //Generador de clave unica

    

  
    render() {
        const {newOrder, list, items, consulta, getName, user, dateNew, message} = this.state;
      return (
        <AppContext.Provider
        value={{
        
          onClickItem: this.onClickItem,
          handleChange: this.handleChange,
          handleChangeFound: this.handleChangeFound,
          handleChangeDate: this.handleChangeDate,
          handleChangeSeller:this.handleChangeSeller,
          handleChangeProject:this.handleChangeProject,
          handleChangeSelect: this.handleChangeSelect,
          deleteFilter: this.deleteFilter,
          handleSubmit: this.handleSubmit ,
          handleLogout:this.handleLogout,
          productClave:this.state.productClave,
          modalIsOpen:this.state.modalIsOpen,
          openModal:this.openModal,
          closeModal:this.closeModal,
          handleUpdate:this.handleUpdate,

          message,
          newOrder,
          list,
          items,
          consulta,
          getName,
          user,
          dateNew,
          

        }}
        >
          {this.props.children}

        </AppContext.Provider>
      );
    }
  }
 
  export const AppContextConsumer = AppContext.Consumer;