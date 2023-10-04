import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Nav from './app/nav';
import Home from './app/nav/home';
import { AuthProvider, AutRoute, AutRouteAdmin } from './app/auth';
import Informacion from './app/nav/informacion';
import Login from './app/login';
import Logoaut from './app/nav/logoaut';
import Perfil from './app/nav/perfil';
import Reservar from './app/nav/reservar';
import Error from './app/error';
import Admin from './app/nav/admin';
import NavAdmin from './app/navAdmin';
import LogautAdmin from './app/nav/logautAdmin';
import Prestamos from './app/admin/prestamos';
import Libros from './app/admin/libros';
import Reservas from './app/admin/reservas';


const App = () => {
  const [isAdminVisible, setIsAdminVisible] = useState(false);

  useEffect(() => {
    // Comprueba si hay datos en sessionStorage (ajusta esto según tu lógica)
    const sessionData = sessionStorage.getItem('admin');

    // Actualiza el estado isAdminVisible en función de los datos en sessionStorage
    setIsAdminVisible(!!sessionData); // Cambia esto según tus criterios
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          {!isAdminVisible ? <Nav /> : null}
          {isAdminVisible ? <NavAdmin /> : null}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logoaut" element={<AutRoute><Logoaut /></AutRoute>} />
            <Route path="/loguatAdmin" element={<AutRouteAdmin><LogautAdmin /></AutRouteAdmin>} />
            <Route path="/perfil" element={<AutRoute><Perfil /></AutRoute>} />
            <Route path="/reservar" element={<AutRoute><Reservar /></AutRoute>} />
            <Route path="/reservar-usuario" element={<AutRoute><Reservar /></AutRoute>} />
            <Route path="/admin" element={<AutRouteAdmin><Admin /></AutRouteAdmin>} />
            <Route path="/admin/prestamos" element={<AutRouteAdmin><Prestamos /></AutRouteAdmin>} />
            <Route path="/admin/libros" element={<AutRouteAdmin><Libros /></AutRouteAdmin>} />
            <Route path="/admin/reservas" element={<AutRouteAdmin><Reservas /></AutRouteAdmin>} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
          <footer>
            <div>
              <h2>Autor</h2>
              <p>Jose Daniel Nova Muñoz</p>
            </div>
            <div>
              <h2>Redes Sociales</h2>
              <div className="redes">
                <div>
                  <p>linkeding</p>
                  <p>instagram</p>
                </div>
                <div>
                  <p>git hub</p>
                  <p>Discord</p>
                </div>
              </div>
            </div>
          </footer>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
