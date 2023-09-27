import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

const ListaLibros = () => {
  const userSessionStorage = sessionStorage.getItem("user");
  const user = JSON.parse(userSessionStorage)
  const isMobile = useMediaQuery({
    maxWidth: 600,
  });

  const [libros, setLibros] = useState([]);
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFinal, setFechaFinal] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null); // Almacenar el ID del libro seleccionado

  useEffect(() => {
    async function obtenerLibros() {
      try {
        const respuesta = await axios.get("http://127.10.10.10:3000/api/productos/");

        if (respuesta.status === 200) {
          setLibros(respuesta.data);
        } else {
          console.log("Ocurrió un error al obtener los libros");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    obtenerLibros();
  }, []);

  const handleFechaInicio = (fecha) => {
    setFechaInicio(fecha);
  };

  const handleFechaFinal = (fecha) => {
    setFechaFinal(fecha);
  };

  const handleReserva = async () => {
    try {
      // Realizar la solicitud POST a la API de reservas
      const reservaData = {
        idUsuario: user.id,
        usuario: user.username,
        libroId: selectedBookId,
        fechaInicio: fechaInicio.toISOString(),
        fechaFinal: fechaFinal.toISOString(),
        estado: 'pendiente'
      };
  
      const respuesta = await axios.post("http://127.10.10.10:3000/api/reservas/", reservaData);
  
      if (respuesta.status === 200) {
        console.log("Reserva exitosa.");
        setModalOpen(false); // Cerrar la modal después de la reserva
      } else {
        console.log("Ocurrió un error al realizar la reserva");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = (idLibro) => {
    setSelectedBookId(idLibro); // Almacenar el ID del libro seleccionado
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
          {libros && libros.map((libro) => (
            <tr key={libro._id}>
              <td>{libro.titulo}</td>
              <td>{libro.genero}</td>
              {!isMobile && <td>{libro.editorial}</td>}
              {!isMobile && <td>{libro.autor}</td>}
              {user && (
                <td>
                  <button
                    className="reservaB"
                    id={libro._id}
                    onClick={() => {
                      openModal(libro._id);
                    }}
                  >
                    Reservar
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para la reserva */}
      {modalOpen && (
        <div className="modal">
          <h2>Reservar libro</h2>
          <label>Fecha de inicio:</label>
          <input
            type="date"
            value={fechaInicio.toISOString().split('T')[0]}
            onChange={(e) => handleFechaInicio(new Date(e.target.value))}
          />
          <br />
          <label>Fecha de finalización:</label>
          <input
            type="date"
            value={fechaFinal.toISOString().split('T')[0]}
            onChange={(e) => handleFechaFinal(new Date(e.target.value))}
          />
          <br />
          <div>
            <button onClick={handleReserva}>Reservar</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaLibros;
