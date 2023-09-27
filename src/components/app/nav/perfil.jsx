import React, { useState, useEffect } from "react";
import { useAuth } from '../auth';
import { Navigate } from "react-router-dom";
import { events } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

const Perfil = () => {

    const auth = useAuth();

    const [user, setUser] = useState(null);

    const isMobile = useMediaQuery({
      maxWidth: 600,
    });

    useEffect(() => {
        const userSessionStorage = sessionStorage.getItem('user');
        if (userSessionStorage) {
            setUser(JSON.parse(userSessionStorage));
        }
    }, [auth.user]);

    return (
        <div className="centerPerfil">
        {user && (
          <div className="perfil">
            <h1>{user.username}</h1>
            <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} alt={user.username} />
  
            <div>
              <h2>Información del usuario</h2>
              <ul>
                <li>
                  <strong>Nombre de usuario:</strong> {user.username}
                </li>
                <li>
                  <strong>ID de usuario:</strong> {user.id}
                </li>
                <li>
                  <strong>Discord Tag:</strong> {user.discriminator}
                </li>
                <li>
                  <strong>Idioma:</strong> {user.locale}
                </li>
              </ul>
            </div>
          </div>
        )}
        {!user && (
          <div>
            Cargando perfil...
          </div>
        )}
      </div>
    );
};

export default Perfil;