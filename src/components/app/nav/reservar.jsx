import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

// Establece el elemento de la aplicación para react-modal
Modal.setAppElement('#root'); // Asegúrate de que "#root" sea el ID de tu elemento raíz en el HTML.

const Reservar = () => {
  // Estado para almacenar los datos de la API
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationIdToDelete, setReservationIdToDelete] = useState(null);

  const openModal = (reservationId) => {
    setReservationIdToDelete(reservationId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setReservationIdToDelete(null);
    setIsModalOpen(false);
  };

  const deleteReservation = async () => {
    try {
      await axios.delete(`http://127.10.10.10:3000/api/reservas/${reservationIdToDelete}`);
      // Actualizar el estado de reservas después de eliminar
      setReservas(reservas.filter((reserva) => reserva._id !== reservationIdToDelete));
      closeModal(); // Cierra la modal después de eliminar
    } catch (error) {
      // Maneja errores de eliminación
      console.error("Error al eliminar la reserva", error);
    }
  };

  useEffect(() => {
    // Obtén el ID de usuario del sessionStorage
    const userSessionStorage = sessionStorage.getItem('user');
    const user = JSON.parse(userSessionStorage)
    
    // Verifica si el ID de usuario está presente en sessionStorage
    if (!user) {
      setError("ID de usuario no encontrado en el sessionStorage");
      return;
    }

    // Realiza la solicitud GET a la API con el ID de usuario como parte de la URL
    axios
      .get(`http://127.10.10.10:3000/api/reservas/IdUser/${user.id}`)
      .then((response) => {
        // Actualiza el estado con los datos de la API
        setReservas(response.data);
      })
      .catch((err) => {
        // Maneja los errores si la solicitud falla
        setError(err);
      });
  }, []);
  
  // Renderiza los datos de la API en tu componente
  return (
    <div className="Reservar">
      <h1>Tus Reservas</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="reservas-container">
          {reservas.map((reserva, index) => (
            <div key={reserva._id} className="reserva">
              <button className="delete-button" onClick={() => openModal(reserva._id)}>X</button>
              <p>Fecha de Inicio: {new Date(reserva.fechaInicio).toLocaleDateString()}</p>
              <p>Fecha Final: {new Date(reserva.fechaFinal).toLocaleDateString()}</p>
              <p>Estado: {reserva.estado}</p>
              <div className="info-libro">
                <h2>Información del Libro:</h2>
                <p>Título: {reserva.libro[0].titulo}</p>
                <p>Género: {reserva.libro[0].genero}</p>
                <p>Editorial: {reserva.libro[0].editorial}</p>
                <p>Autor: {reserva.libro[0].autor}</p>
                <img src={reserva.libro[0].img} alt={reserva.libro[0].titulo} />
              </div>
            </div>
          ))}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Confirmación de Eliminación"
          >
            <h2>¿Estás seguro de eliminar esta reserva?</h2>
            <button className="delete-button" onClick={deleteReservation}>Eliminar</button>
            <button className="cancel-button-modal" onClick={closeModal}>Cancelar</button>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Reservar;