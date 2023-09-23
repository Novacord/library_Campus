import React from "react";

const ListaLibros = ({ libros }) => {
    return (
        <div className="tabla">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Género</th>
                        <th>Editorial</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro) => (
                        <tr key={libro.id}>
                            <td>{libro.titulo}</td>
                            <td>{libro.genero}</td>
                            <td>{libro.editorial}</td>
                            <td>{libro.autor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaLibros;