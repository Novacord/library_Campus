import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const [redirected, setRedirected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si la página ya ha sido redirigida
    if (!redirected) {
      // Establece redirected a true para evitar futuras redirecciones
      setRedirected(true);
    
    }
  }, [redirected, navigate]);

  return (
    <div className='adminBotones'>
      <Link to={`reservas`}>
        <button>
          <Card
            imageSrc="../../../../public/reserva.png"
            title="Reservas"
          />
        </button>
      </Link>

      <Link to={`prestamos`}>
        <button>
          <Card
            imageSrc="../../../../public/pedir-prestado.png"
            title="Prestamos"
          />
        </button>
      </Link>

      <Link to={`libros`}>
        <button>
          <Card
            imageSrc="../../../../public/libro-abierto.png"
            title="Libros"
          />
        </button>
      </Link>
    </div>
  );
};

const Card = ({ imageSrc, title, onClick }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Admin;
