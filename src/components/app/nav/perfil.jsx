import React, { useState, useEffect } from "react";
import { useAuth } from '../auth';
import { Navigate } from "react-router-dom";
import { events } from "@react-three/fiber";

const Perfil = () => {

    const auth = useAuth();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const userSessionStorage = sessionStorage.getItem('user');
        if (userSessionStorage) {
            setUser(JSON.parse(userSessionStorage));
        }
    }, [auth.user]);

    // Filtra la lista de servidores para incluir solo los servidores
    // del campus.
    const campus = user?.guilds.filter((guild) => guild.name === 'CampusLands 🚀');

    return (
        <div className="div-centrado">
        {user && (
          <div>
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
  
            <div>
              <h2>Servidores</h2>
              <ul>
                {campus?.length > 0 ? campus.map((guild) => (
                  <li key={guild.id}>
                    <strong>{guild.name}</strong>
                    <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`} alt={guild.name} />
                  </li>
                )) : <p>No perteneces a ningún servidor.</p>}
              </ul>
            </div>
  
            <div>
              <h2>Acciones</h2>
              <a href={`https://discord.com/users/${user.id}`}>Contactar</a>
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