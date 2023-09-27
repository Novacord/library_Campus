import React, { useEffect, useState } from "react";
import axios from "axios";

const Reservar = () => {
  // Estado para almacenar los datos de la API
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState(null);

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
  console.log(reservas)
  // Renderiza los datos de la API en tu componente
  return (
    <div className="Reservar"> {/* Aplica la clase CSS al contenedor principal */}
      <h1>Tus Reservas</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {reservas.map((reserva) => (
            <li key={reserva._id}>
              <p>Fecha de Inicio: {new Date(reserva.fechaInicio).toLocaleDateString()}</p>
              <p>Fecha Final: {new Date(reserva.fechaFinal).toLocaleDateString()}</p>
              <p>Estado: {reserva.estado}</p>
              <div className="info-libro"> {/* Aplica la clase CSS a la información del libro */}
                <h2>Información del Libro:</h2>
                <p>Título: {reserva.libro[0].titulo}</p>
                <p>Género: {reserva.libro[0].genero}</p>
                <p>Editorial: {reserva.libro[0].editorial}</p>
                <p>Autor: {reserva.libro[0].autor}</p>
                <img src={reserva.libro[0].img} alt={reserva.libro[0].titulo} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reservar;
