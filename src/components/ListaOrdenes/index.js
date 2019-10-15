
import React from 'react';




class ListaOrdenes extends React.Component {
    render() {
        const{ list} = this.context
        return (
         <div>
            <p>{list.uge}</p>
         </div>   
        )
}
}


export default ListaOrdenes
