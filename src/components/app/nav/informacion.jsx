import React from "react";
import ListaLibros from "./libros/listaLibros";
import libros from "./informacionPost";


const Informacion = ()=>{
    const [ libroTodo, setLibrosTodo ] = React.useState(libros)
    return(
        <div>
            <ListaLibros libros={libroTodo} />
        </div>
    )
}

export default Informacion;