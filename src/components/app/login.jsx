import React, { useState } from "react";
import { useAuth } from './auth';
import { Navigate } from "react-router-dom";
import { events } from "@react-three/fiber";
import axios from 'axios';


const CAMPUS_LANDS_SERVER_NAME = 'CampusLands 🚀';

const Login = () => {
    const auth = useAuth();
    const [showLoginModal, setShowLoginModal] = useState(false);

    const [redirectToAdmin, setRedirectToAdmin] = useState(false);

    

    const login = (data) => {
        auth.login(data);
    };

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };

    const handleLogin = async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
      
        const response = await axios.post('http://127.10.10.10:3000/api/user/login/admin', {
          username: username,
          password: password,
        });
      
        console.log(response);
      
        if (response.data) {
          console.log('Inicio de sesión exitoso');
          sessionStorage.setItem('admin', JSON.stringify(response.data));
          setRedirectToAdmin(true);
        } else {
          console.log('Inicio de sesión fallido');
          alert('usuario no existente');
        }
      };

    return (
        <>
            <div className='div-centrado'>
                <button type="submit" className="boton-grande" onClick={()=>{
                    window.open(
                        "http://127.10.10.10:3000/api/user/callback",
                        "targetWindow",
                        `
                        toolbar=no,
                            location=no,
                            estatus=no,
                            menubar=no,
                            scrollbars=yes,
                            resizable=yes,
                            width=620,
                            height=700
                        `
                    )
                    const popup =  window.open(
                        "http://127.10.10.10:3000/api/user/callback",
                        "targetWindow",
                        `
                        toolbar=no,
                            location=no,
                            estatus=no,
                            menubar=no,
                            scrollbars=yes,
                            resizable=yes,
                            width=620,
                            height=700
                        `
                    )
                    window.addEventListener("message", event => {
                        if (event.origin === 'http://127.10.10.10:3000'){
                            if(event.data){
                                const isCampusLandsMember = event.data.guilds.some((guild) => guild.name === CAMPUS_LANDS_SERVER_NAME);
                                if (isCampusLandsMember) {
                                    sessionStorage.setItem('user', JSON.stringify(event.data))
                                    login(event.data)
                                    popup.close()
                                } else {
                                    popup.close()
                                    window.location.href = '/error';
                                }
                            }
                        }
                    })
                }}>
                    <img src="https://i0.wp.com/spaniardperformance.com/wp-content/uploads/2023/04/discord-logo.png?ssl=1" alt="" />
                </button>
                <button className="boton-grande" onClick={openLoginModal}>
                    <img src="../../../public/user.png" alt="" />
                </button>
            </div>

            {showLoginModal && (
                <div className="modalLogin">
                    <div className="modal-content">
                        <span className="close" onClick={closeLoginModal}>&times;</span>
                        <h2>Iniciar sesión</h2>
                        <div className="form-group">
                            <label htmlFor="username">Nombre de usuario:</label>
                            <input type="text" id="username" name="username" placeholder="Nombre de usuario" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" placeholder="Contraseña" />
                        </div>
                        <button onClick={handleLogin}>Iniciar sesión</button>
                    </div>
                </div>
            )}
            {redirectToAdmin && <Navigate to="/admin" />} {/* Redirige al usuario */}
        </>
    );
};

export default Login;
