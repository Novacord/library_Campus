import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

const apiUrl = "http://192.168.129.72:5076/api/productos/";

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
      const response = await axios.get("http://192.168.129.72:5076/api/productos/todos");
      setLibros(response.data);
    } catch (error) {
      console.error("Error al cargar libros:", error);
    }
  };

  // Función para crear un nuevo libro
  const crearLibro = async () => {
    if (
      !nuevoLibro.titulo ||
      !nuevoLibro.genero ||
      !nuevoLibro.editorial ||
      !nuevoLibro.autor ||
      !nuevoLibro.id
    ) {
      // Muestra un mensaje de error o realiza alguna acción adecuada
      console.error("Todos los campos son obligatorios.");
      return;
    }

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
  
    // Ajustar la estructura de libroEditado al orden y formato esperados por el servidor
    const libroEditadoFormateado = {
      titulo: libroEditado.titulo,
      genero: libroEditado.genero,
      editorial: libroEditado.editorial,
      autor: libroEditado.autor,
      id: libroEditado.id,
      img: libroEditado.img,
      estado: libroEditado.estado,
    };
    console.log(`${apiUrl}${editingBookId}`)

  
      await axios.put(`${apiUrl}${editingBookId}`, libroEditadoFormateado);
      const response = await axios.get(`${apiUrl}${editingBookId}`);
      const libroActualizado = response.data;
  
      // Realiza alguna acción con el objeto actualizado, por ejemplo, mostrarlo en una alerta
      alert("Libro actualizado: " + JSON.stringify(libroActualizado));
  
      cargarLibros(); // Recargar la lista después de editar el libro
      closeModal(); // Cerrar la modal
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
    <div className="libros-container">
    <h1>Libros</h1>
    <div className="form-container">
      {/* Formulario de creación de libros */}
      <div className="form-item">
        <input
          className="input-field"
          type="text"
          placeholder="Título"
          value={nuevoLibro.titulo}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, titulo: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="Género"
          value={nuevoLibro.genero}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, genero: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="Editorial"
          value={nuevoLibro.editorial}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, editorial: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="Autor"
          value={nuevoLibro.autor}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, autor: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="ID"
          value={nuevoLibro.id}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, id: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="URL de la imagen"
          value={nuevoLibro.img}
          onChange={(e) =>
            setNuevoLibro({ ...nuevoLibro, img: e.target.value })
          }
        />
        <button className="button" onClick={crearLibro}>
          Agregar Libro
        </button>
      </div>
    </div>

    <ul className="libros-list">
      {libros.map((libro) => (
        <li key={libro._id} className="libro-item">
          <div>
            {editando === libro._id ? (
              <div className="form-item">
                <input
                  className="input-field"
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
                  className="input-field"
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
                  className="input-field"
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
                  className="input-field"
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
                  className="input-field"
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
                  className="input-field"
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
                <button className="button" onClick={editarLibro}>
                  Guardar
                </button>
                <button className="button" onClick={closeModal}>
                  Cancelar
                </button>
              </div>
            ) : (
              <div>
                {libro.titulo}
                <button className="button" onClick={() => openModal(libro._id)}>
                  Editar
                </button>
                <button className="button" onClick={() => eliminarLibro(libro._id)}>
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
      className="modalEdit"
      overlayClassName="modal-overlay"
    >
      <h2>Editar Libro</h2>
      <div className="form-item">
        <input
          className="input-field"
          type="text"
          placeholder="Título"
          value={libroEditado.titulo}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, titulo: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="Género"
          value={libroEditado.genero}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, genero: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="Editorial"
          value={libroEditado.editorial}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, editorial: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="Autor"
          value={libroEditado.autor}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, autor: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="ID"
          value={libroEditado.id}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, id: e.target.value })
          }
        />
        <input
          className="input-field"
          type="text"
          placeholder="URL de la imagen"
          value={libroEditado.img}
          onChange={(e) =>
            setLibroEditado({ ...libroEditado, img: e.target.value })
          }
        />
        <button className="button" onClick={editarLibro}>
          Guardar
        </button>
        <button className="button" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </Modal>
  </div>
  );
};

export default Libros;
