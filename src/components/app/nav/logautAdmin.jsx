import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";

const LogautAdmin = () => {

    const [open, setOpen] = useState(true);

    const handleClose = async () => {
        sessionStorage.removeItem('admin');
        // Verifica si la solicitud fetch fue exitosa
   
            // Redirecciona al usuario a la página de inicio
        window.location.reload();
        Navigate('/')
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
                                <Link to='/'>cerrar</Link>
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

export default LogautAdmin;