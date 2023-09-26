import React from "react";
import { useMediaQuery } from "react-responsive";

const ListaLibros = ({ libros }) => {
    const user = sessionStorage.getItem('user');
    const isMobile = useMediaQuery({
        maxWidth: 600,
    });

    const handleReserva = async (libro) => {
        // // Realiza una solicitud fetch a http://127.10.10.10:3000/api/libro/reservar
        // const response = await fetch('http://127.10.10.10:3000/api/libro/reservar', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         id: libro.id,
        //     }),
        // });

        // // Verifica si la solicitud fetch fue exitosa
        // if (response.ok) {
        //     // Agrega el libro a la lista de libros reservados en el session storage
        //     setSessionStorageData([...sessionStorageData, libro]);
        // } else {
        //     // Muestra un mensaje de error
        //     alert('No se pudo reservar el libro');
        // }
    };

    return (
        <div className="tabla">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Género</th>
                        {!isMobile && <th>Editorial</th>}
                        {!isMobile && <th>Autor</th>}
                        {user && <th>Reservar</th>}
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro) => (
                        <tr key={libro.id}>
                            <td>{libro.titulo}</td>
                            <td>{libro.genero}</td>
                            {!isMobile && <td>{libro.editorial}</td>}
                            {!isMobile && <td>{libro.autor}</td>}
                            {user && <td>
                                <button className="reservaB" onClick={() => handleReserva(libro)}>Reservar</button>
                            </td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaLibros;
