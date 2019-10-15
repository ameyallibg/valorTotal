import React, { Component } from "react";

export const AppContext = React.createContext()

 export class AppContextProvider extends Component {
    constructor(props){
        super(props)
        //Datos que se obtienen de las respuestas del formulario
        this.state ={
            newOrder:[],
            list:[],
            
           
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.productClave = this.productClave.bind(this);
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
    handleChange(e){

        let newState = Object.assign(
            this.state.newOrder, {[e.target.name]:e.target.value}
        )
            
        
        
        this.setState({ 
            newOrder:newState
        })
        console.log(this.state.newOrder)
    }
    

    //Validacion del formulario
    handleSubmit = (e)  => {
        console.log(this.state.newOrder)
        e.preventDefault();
        if(!this.validate()){
            return
        }
        

        this.setState({
            list: this.state.newOrder,
           


        })
        
        
       
    }
    
    
    validate(){
        const state = this.state.newOrder
       
        if(state.uge === '' ){
            this.setState({
                modalIsOpen:true,
                message:'Contesta los campos obligatorios'

            })
                return   false
         

           
        }
        return true
    }
    //Generador de clave unica
    productClave (){
        const uge =  this.state.uge ;
        const ugeClave = uge.substr(0,3).toUpperCase(); 
        const date = this.state.dateNew;
        const dateClave = date.substr(2,5).replace("-","");   
    
            this.setState({
                productClave: dateClave  + ugeClave 
    
            })
        }
    

  
    render() {
        const {newOrder, list} = this.state;
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
          list

        }}
        >
          {this.props.children}

        </AppContext.Provider>
      );
    }
  }
 
  export const AppContextConsumer = AppContext.Consumer;