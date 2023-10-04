import React, { useState, useEffect } from "react";
import axios from "axios";

const Prestamos = () => {
    const [prestamos, setPrestamos] = useState([]);
    const [libros, setLibros] = useState([]); // Estado para almacenar la lista de libros disponibles
    const [idPrestamo, setIdPrestamo] = useState("");
    const [nuevoPrestamo, setNuevoPrestamo] = useState({
        cedula: "",
        nombre: "",
        libro: "",
        fechaInicio: "",
        fechaFinal: ""
    });

    useEffect(() => {
        // Realizar una solicitud para obtener la lista de préstamos al cargar el componente
        axios.get("http://192.168.129.72:5076/api/prestamos")
            .then((response) => {
                setPrestamos(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener la lista de préstamos:", error);
            });

        // Realizar una solicitud para obtener la lista de libros disponibles
        axios.get("http://192.168.129.72:5076/api/productos")
            .then((response) => {
                setLibros(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener la lista de libros:", error);
            });
    }, []);

    const handleEliminarPrestamo = (id) => {
        axios.delete(`http://192.168.129.72:5076/api/prestamos/${id}`)
            .then(() => {
                // Eliminar el préstamo de la lista después de eliminarlo en la base de datos
                setPrestamos(prestamos.filter((prestamo) => prestamo._id !== id));
            })
            .catch((error) => {
                console.error("Error al eliminar el préstamo:", error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoPrestamo({
            ...nuevoPrestamo,
            [name]: value,
        });
    };

    const handleCrearPrestamo = () => {
        axios.post("http://192.168.129.72:5076/api/prestamos", nuevoPrestamo)
            .then((response) => {
                console.log("Prestamo creado:", response.data);
                setPrestamos([...prestamos, response.data]); // Agregar el nuevo préstamo a la lista
                setNuevoPrestamo({
                    cedula: "",
                    nombre: "",
                    libro: "",
                    fechaInicio: "",
                    fechaFinal: ""
                }); // Limpiar el formulario después de crear el préstamo
            })
            .catch((error) => {
                console.error("Error al crear el préstamo:", error);
            });
        window.location.reload()
    };

    return (
    <div className="containerPrestamos">
        <h2>Crear Préstamo</h2>
        <div className="input-group">
            <label htmlFor="cedula">Cédula:</label>
            <input
            type="text"
            id="cedula"
            name="cedula"
            value={nuevoPrestamo.cedula}
            onChange={handleInputChange}
            required
            />
        </div>
        <div className="input-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
            type="text"
            id="nombre"
            name="nombre"
            value={nuevoPrestamo.nombre}
            onChange={handleInputChange}
            required
            />
        </div>
        <div className="input-group">
            <label htmlFor="libro">Libro:</label>
            <select
            id="libro"
            name="libro"
            value={nuevoPrestamo.libro}
            onChange={handleInputChange}
            required
            >
            <option value="">Seleccione un libro</option>
            {libros.map((libro) => (
                <option key={libro._id} value={libro._id}>
                {libro.titulo}
                </option>
            ))}
            </select>
        </div>
        <div className="input-group">
            <label htmlFor="fechaInicio">Fecha de Inicio:</label>
            <input
            type="date"
            id="fechaInicio"
            name="fechaInicio"
            value={nuevoPrestamo.fechaInicio}
            onChange={handleInputChange}
            required
            />
        </div>
        <div className="input-group">
            <label htmlFor="fechaFinal">Fecha Final:</label>
            <input
            type="date"
            id="fechaFinal"
            name="fechaFinal"
            value={nuevoPrestamo.fechaFinal}
            onChange={handleInputChange}
            required
            />
        </div>
        <button onClick={handleCrearPrestamo}>Crear Préstamo</button>

        <h1>Lista de Préstamos</h1>
        <ul>
            {prestamos.map((prestamo) => (
            <li key={prestamo._id}>
                <span><strong>Cédula:</strong> {prestamo.cedula}, <strong>Nombre:</strong> {prestamo.nombre}, <strong>Libro:</strong> {prestamo.tituloLibro} <strong>Fechas inicio: </strong>{prestamo.fechaFinal}<strong> fecha final:</strong> {prestamo.fechaInicio}</span>
                <button onClick={() => handleEliminarPrestamo(prestamo._id)}>Eliminar</button>
            </li>
            ))}
        </ul>
    </div>
    );
};

export default Prestamos;


