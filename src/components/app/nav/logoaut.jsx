import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";

const Logoaut = () => {

    const [open, setOpen] = useState(true);

    const handleClose = async () => {
        sessionStorage.removeItem('user');

        const response = await fetch('http://192.168.129.72:5076/api/user/logout');

        // Verifica si la solicitud fetch fue exitosa
        if (response.ok) {
            // Redirecciona al usuario a la página de inicio
            Navigate('/')
            window.location.reload();
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
                            <h2>Cerrar sesion</h2>
                            <button className="botonCerrar">
                                <Link to='/perfil'>cerrar</Link>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>¿Estás seguro de que quieres Cerrar sesion?</p>
                            <button type="button" onClick={handleClose}>
                                <Link to='/'>Cerrar sesion</Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Logoaut;