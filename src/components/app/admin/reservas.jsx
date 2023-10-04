import React, { useState, useEffect } from "react";
import axios from "axios";

const Reservas = () => {
  const [reservasEnEspera, setReservasEnEspera] = useState([]);
  const [reservasAceptadas, setReservasAceptadas] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET para obtener todas las reservas con los detalles de los libros
    axios.get("http://192.168.129.72:5076/api/reservas/")
      .then((response) => {
        const todasLasReservas = response.data;
        const reservasEnEspera = todasLasReservas.filter((reserva) => reserva.estado === "pendiente");
        const reservasAceptadas = todasLasReservas.filter((reserva) => reserva.estado === "aceptado");
        setReservasEnEspera(reservasEnEspera);
        setReservasAceptadas(reservasAceptadas);
      })
      .catch((error) => {
        console.error("Error al obtener las reservas:", error);
      });
  }, []);

  const aceptarReserva = (reservaId) => {
    // Realiza una solicitud PUT para aceptar una reserva específica
    axios.put(`http://192.168.129.72:5076/api/reservas/${reservaId}`, { estado: "aceptado" })
      .then((response) => {
        // Actualiza el estado de la reserva en el cliente
        const updatedReservasEnEspera = reservasEnEspera.map((reserva) => {
          if (reserva._id === reservaId) {
            return { ...reserva, estado: "aceptado" };
          } else {
            return reserva;
          }
        });
        setReservasEnEspera(updatedReservasEnEspera);

        // Agrega la reserva a la lista de reservas aceptadas
        const reservaAceptada = reservasEnEspera.find((reserva) => reserva._id === reservaId);
        if (reservaAceptada) {
          setReservasAceptadas([...reservasAceptadas, reservaAceptada]);
        }
      })
      .catch((error) => {
        console.error("Error al aceptar la reserva:", error);
      });
  };

  const marcarComoDevuelta = (reservaId) => {
    // Realiza una solicitud DELETE para eliminar una reserva específica
    axios.delete(`http://192.168.129.72:5076/api/reservas/${reservaId}`)
      .then((response) => {
        // Elimina la reserva de la lista de reservas aceptadas en el cliente
        const updatedReservasAceptadas = reservasAceptadas.filter((reserva) => reserva._id !== reservaId);
        setReservasAceptadas(updatedReservasAceptadas);
      })
      .catch((error) => {
        console.error("Error al eliminar la reserva:", error);
      });
  };

  return (
    <div className="reservas-container"> {/* Aplica una clase CSS al contenedor principal */}
    <div className="reservas">
      <h1>Listado de Reservas en Espera</h1>
      <ul className="reservas-list"> {/* Aplica una clase CSS a la lista */}
        {reservasEnEspera.map((reserva) => (
          <li key={reserva._id} className="reserva-item"> {/* Aplica una clase CSS a cada elemento de la lista */}
            <strong>Nombre del Libro:</strong> {reserva.libro.titulo}
            <br />
            <strong>Fecha de Inicio:</strong> {new Date(reserva.fechaInicio).toLocaleDateString()}
            <br />
            <strong>Fecha de Fin:</strong> {new Date(reserva.fechaFinal).toLocaleDateString()}
            <br />
            <strong>Estado:</strong> {reserva.estado}
            <br />
            <button onClick={() => aceptarReserva(reserva._id)}>Aceptar Reserva</button>
          </li>
        ))}
      </ul>
      </div>
      <div className="reservas">
      <h1>Listado de Reservas Aceptadas</h1>
      <ul className="reservas-list"> {/* Aplica una clase CSS a la lista */}
        {reservasAceptadas.map((reserva) => (
          <li key={reserva._id} className="reserva-item"> {/* Aplica una clase CSS a cada elemento de la lista */}
            <strong>Nombre del Libro:</strong> {reserva.libro.titulo}
            <br />
            <strong>Fecha de Inicio:</strong> {new Date(reserva.fechaInicio).toLocaleDateString()}
            <br />
            <strong>Fecha de Fin:</strong> {new Date(reserva.fechaFinal).toLocaleDateString()}
            <br />
            <strong>Estado:</strong> {reserva.estado}
            <br />
            <button onClick={() => marcarComoDevuelta(reserva._id)}>Marcar como Devuelta</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Reservas;

