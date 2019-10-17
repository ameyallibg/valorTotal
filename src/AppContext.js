import React, { Component } from "react";
import db from "./Fire.js";

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
            items:[] 
           
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
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
    

    //Validacion del formulario
    handleSubmit = (e)  => {
        
        e.preventDefault();
        if(!this.validate()){
            return
        }
        
       
            const uge =  this.state.uge ;
            console.log(this.state.uge)
            const ugeClave = uge.substr(0,3).toUpperCase(); 
            const date = this.state.dateNew;
            const dateClave = date.substr(2,5).replace("-","");   
        
                this.setState({
                    productClave: dateClave  + ugeClave 
                })

                console.log(this.state.productClave)
           

                document.getElementById("formClear").reset();
    
          db.collection("orden").add({
          
            vendedor: this.state.vendedor,
            uge: this.state.uge,
            dateNew: this.state.dateNew,
            estatus: this.state.estatus,
            productClave: this.state.productClave,
          
         })

        
        
        this.setState({
           vendedor:"",
           uge:"",
           fecha:"",
           estatus:"",
           productClave:"",

        })
    }

    componentWillMount() {
        db.collection("orden")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ items: data });
          }, console.log(this.state.items));
      }


      componentWillUpdate(){
        db.collection("orden")
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          
          this.setState({ items: data });
        });
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
        const {newOrder, list, items} = this.state;
      return (
        <AppContext.Provider
        value={{
        
          
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit ,
          productClave:this.state.productClave,
          modalIsOpen:this.state.modalIsOpen,
          openModal:this.openModal,
          closeModal:this.closeModal,
          newOrder,
          list,
          items

        }}
        >
          {this.props.children}

        </AppContext.Provider>
      );
    }
  }
 
  export const AppContextConsumer = AppContext.Consumer;