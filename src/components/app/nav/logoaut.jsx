import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";

const Logoaut = () => {

    const [open, setOpen] = useState(true);

    const handleClose = async () => {
        sessionStorage.removeItem('user');

        // Realiza una solicitud fetch a http://127.10.10.10:3000/api/user/logout
        const response = await fetch('http://127.10.10.10:3000/api/user/logout');

        // Verifica si la solicitud fetch fue exitosa
        if (response.ok) {
            // Redirecciona al usuario a la página de inicio
            window.location.reload();
            Navigate('/')
        } else {
            // Muestra un mensaje de error
            alert('No se pudo realizar el logout');
        }
    };

    return (
        <>  
            <div className="fondoLo">
                <img src="../../../../public/hermoso-cielo-nocturno-estrellas-brillantes.jpg" alt="" />
            </div>
            {open && (
                <div className="modal" style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 100,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Logout</h2>
                            <button className="botonCerrar">
                                <Link to='/perfil'>cerrar</Link>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>¿Estás seguro de que quieres hacer logout?</p>
                            <button type="button" onClick={handleClose}>
                                <Link to='/'>Logoaut</Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Logoaut;