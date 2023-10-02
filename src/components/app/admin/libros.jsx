import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

const apiUrl = "http://127.10.10.10:3000/api/productos/";

const Libros = () => {
  const [libros, setLibros] = useState([]);
  const [nuevoLibro, setNuevoLibro] = useState({
    titulo: "",
    genero: "",
    editorial: "",
    autor: "",
    id: "",
    img: "",
    estado: "disponible",
  });
  const [libroEditado, setLibroEditado] = useState({});
  const [editando, setEditando] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingBookId, setEditingBookId] = useState(null);

  // Función para cargar la lista de libros desde la API
  const cargarLibros = async () => {
    try {
      const response = await axios.get(apiUrl);
      setLibros(response.data);
    } catch (error) {
      console.error("Error al cargar libros:", error);
    }
  };

  // Función para crear un nuevo libro
  const crearLibro = async () => {
    try {
      await axios.post(apiUrl, nuevoLibro);
      cargarLibros(); // Recargar la lista después de agregar un nuevo libro
      setNuevoLibro({
        titulo: "",
        genero: "",
        editorial: "",
        autor: "",
        id: "",
        img: "",
        estado: "disponible",
      }); // Limpiar el formulario de entrada
    } catch (error) {
      console.error("Error al crear el libro:", error);
    }
  };

  // Función para editar un libro
  const editarLibro = async () => {
    if (
      !libroEditado.titulo ||
      !libroEditado.genero ||
      !libroEditado.editorial ||
      !libroEditado.autor ||
      !libroEditado.id
    ) {
      // Muestra un mensaje de error o realiza alguna acción adecuada
      console.error("Todos los campos son obligatorios.");
      return;
    }
  
    try {
      await axios.put(`${apiUrl}${editingBookId}`, libroEditado);
      cargarLibros(); // Recargar la lista después de editar el libro
      closeModal(); // Cerrar la modal
    } catch (error) {
      console.error("Error al editar el libro:", error);
    }
  };
  // Función para eliminar un libro
  const eliminarLibro = async (id) => {
    try {
      await axios.delete(`${apiUrl}${id}`);
      cargarLibros(); // Recargar la lista después de eliminar el libro
    } catch (error) {
      console.error("Error al eliminar el libro:", error);
    }
  };

  // Función para abrir la modal de edición
  const openModal = (id) => {
    setModalIsOpen(true);
    setEditingBookId(id);
    const libroEdit = libros.find((libro) => libro._id === id);
    setLibroEditado(libroEdit ? { ...libroEdit } : {});
  };

  // Función para cerrar la modal de edición
  const closeModal = () => {
    setModalIsOpen(false);
    setEditingBookId(null);
    setLibroEditado({});
  };

  useEffect(() => {
    cargarLibros(); // Cargar la lista de libros cuando el componente se monta
  }, []);

  return (
    <div>
      <h1>Libros</h1>
      <ul>
        {libros.map((libro) => (
          <li key={libro._id}>
            <div>
              {editando === libro._id ? (
                <div>
                  <input
                    type="text"
                    placeholder="Título"
                    value={libroEditado.titulo}
                    onChange={(e) =>
                      setLibroEditado({
                        ...libroEditado,
                        titulo: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Género"
                    value={libroEditado.genero}
                    onChange={(e) =>
                      setLibroEditado({
                        ...libroEditado,
                        genero: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Editorial"
                    value={libroEditado.editorial}
                    onChange={(e) =>
                      setLibroEditado({
                        ...libroEditado,
                        editorial: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Autor"
                    value={libroEditado.autor}
                    onChange={(e) =>
                      setLibroEditado({
                        ...libroEditado,
                        autor: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="ID"
                    value={libroEditado.id}
                    onChange={(e) =>
                      setLibroEditado({
                        ...libroEditado,
                        id: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="URL de la imagen"
                    value={libroEditado.img}
                    onChange={(e) =>
                      setLibroEditado({
                        ...libroEditado,
                        img: e.target.value,
                      })
                    }
                  />
                  <button onClick={editarLibro}>Guardar</button>
                  <button onClick={closeModal}>Cancelar</button>
                </div>
              ) : (
                <div>
                  {libro.titulo}
                  <button onClick={() => openModal(libro._id)}>Editar</button>
                  <button onClick={() => eliminarLibro(libro._id)}>
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Modal de edición */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Editar Libro"
      >
        <h2>Editar Libro</h2>
        <input
          type="text"
          placeholder="Título"
          value={libroEditado.titulo}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, titulo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Género"
          value={libroEditado.genero}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, genero: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Editorial"
          value={libroEditado.editorial}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, editorial: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Autor"
          value={libroEditado.autor}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, autor: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="ID"
          value={libroEditado.id}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, id: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={libroEditado.img}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, img: e.target.value })
          }
        />
        <button onClick={editarLibro}>Guardar</button>
        <button onClick={closeModal}>Cancelar</button>
      </Modal>

      {/* Formulario de creación de libros */}
      <div>
        <input
          type="text"
          placeholder="Título"
          value={nuevoLibro.titulo}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, titulo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Género"
          value={nuevoLibro.genero}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, genero: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Editorial"
          value={nuevoLibro.editorial}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, editorial: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Autor"
          value={nuevoLibro.autor}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, autor: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="ID"
          value={nuevoLibro.id}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, id: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={nuevoLibro.img}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, img: e.target.value })
          }
        />
        <button onClick={crearLibro}>Agregar Libro</button>
      </div>
    </div>
  );
};

export default Libros;
