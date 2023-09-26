import React, { useState,useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import obtenerLibros from "../informacionPost.jsx";

const ListaLibros = () => {
  const user = sessionStorage.getItem("user");
  const isMobile = useMediaQuery({
    maxWidth: 600,
  });

  const [libros, setLibros] = useState([]);

  useEffect(() => {
    async function obtenerLibros(libros) {
      const respuesta = await axios.get(
        "http://127.10.10.10:3000/api/productos/"
      );

      if (respuesta.status === 200) {
        setLibros(respuesta.data);
      } else {
        console.log("Ocurrió un error al obtener los libros");
      }
    }

    obtenerLibros(libros.data);
  }, []);
  console.log(libros)
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
          {libros && libros.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.genero}</td>
              {!isMobile && <td>{libro.editorial}</td>}
              {!isMobile && <td>{libro.autor}</td>}
              {user && <td>
                <button className="reservaB">Reservar</button>
              </td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaLibros;

