
  
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
            dateNew: new Date().toLocaleString(),
            items:[] ,
            newcontador: 0,
            mes: [],
            getDate:[],
            consulta:[],
            buscador:"",
            newestatus:"",
            getName:"",
            
           
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
  handleChangeDate = (e) =>{

    const handle = e.target.value
      
    console.log(handle)
    
    if(handle === ""){
     
      db.collection("orden").onSnapshot(this.obtenerBD)
   
      }else {
        db.collection("orden").where("dateNew", "==", handle )
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
        
            
            
            
            const ugeClave = this.state.uge.substr(0,3).toUpperCase(); 
            const dateClave = this.state.dateNew.substr(2,5).replace("-","");  
            const newDate = this.state.dateNew.slice(5, 7)
            console.log(this.state.mes)
            console.log(newDate)
            console.log(this.state.getDate)

           
           if(newDate ===
             this.state.mes){
              
              let contador = this.state.getDate +1 ;

           
                   
              if(contador < 100 && contador < 10){ 
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
                 newcontador: contador,
      
              }, () => {console.log(this.state.mes)})
              } else if(contador < 100 && contador > 10){
                const claveUnica = dateClave + ugeClave +  '0'+contador
          
            
                document.getElementById("formClear").reset();
                
                db.collection("orden").add({
                
                  vendedor: this.state.vendedor,
                  uge: this.state.uge,
                  dateNew: this.state.dateNew,
                  estatus: this.state.estatus,
                  productClave: claveUnica,
                  date: this.state.dateNew,
                
               })
      
              
              
              this.setState({
                 vendedor:"",
                 uge:"",
                 fecha:"",
                 estatus:"",
                 productClave:"",
      
              })
              } else { 
                const claveUnica = dateClave + ugeClave + contador
          
            
                document.getElementById("formClear").reset();
                
                db.collection("orden").add({
                
                  vendedor: this.state.vendedor,
                  uge: this.state.uge,
                  dateNew: this.state.dateNew,
                  estatus: this.state.estatus,
                  productClave: claveUnica,
                  
                
               })
      
              
              
              this.setState({
                 vendedor:"",
                 uge:"",
                 fecha:"",
                 estatus:"",
                 productClave:"",
      
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
         user:user
       })
       
      }

      obtenerBD=()=>{
        db.collection("orden").orderBy("dateNew", "desc")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data)
            this.setState({ items: data });
          }, console.log(this.state.items));

          db.collection("orden").orderBy("dateNew", "desc").limit(1)
          .get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
           const newobj = data[0].contador
           const newmes = data[0].mes

            
  
            this.setState({ getDate: newobj, mes:newmes })
          })
      }


    
    onClickItem(e){
      
      
     let newid=  e.target.id
     let newVendedor = e.target.name
     
      db.collection("orden").where("productClave", "==", newid).where("vendedor", "==", )
    .get()
    .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
            
            console.log(data);
            this.setState({ consulta: data , modalIsOpen:true})
            
        });
    
       
          

    }

    deleteFilter() {
      document.getElementsByName("estatus")[0].value  = "estatus";
      document.getElementsByName("buscador")[0].value = "";
      document.getElementsByName("fechaBuscador")[0].value = ""
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
        return true
    }
    //Generador de clave unica

    

  
    render() {
        const {newOrder, list, items, consulta, getName, user} = this.state;
      return (
        <AppContext.Provider
        value={{
        
          onClickItem: this.onClickItem,
          handleChange: this.handleChange,
          handleChangeFound: this.handleChangeFound,
          handleChangeDate: this.handleChangeDate,
          handleChangeSelect: this.handleChangeSelect,
          deleteFilter: this.deleteFilter,
          handleSubmit: this.handleSubmit ,
          handleLogout:this.handleLogout,
          productClave:this.state.productClave,
          modalIsOpen:this.state.modalIsOpen,
          openModal:this.openModal,
          closeModal:this.closeModal,
          handleUpdate:this.handleUpdate,

      
          newOrder,
          list,
          items,
          consulta,
          getName,
          user,
          

        }}
        >
          {this.props.children}

        </AppContext.Provider>
      );
    }
  }
 
  export const AppContextConsumer = AppContext.Consumer;
