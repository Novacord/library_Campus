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

    const printSessionStorage = () => {
        const items = sessionStorage.getItem('items');
        if (items) {
            const itemArray = JSON.parse(items);
            itemArray.forEach(item => console.log(item));
        } else {
            console.log('No hay elementos en el session storage');
        }
    }

    return (
        <>
            <div className='div-centrado'>
                {user && (
                    <div>
                        <h1>{user.username}</h1>
                        <img src={user.avatar} alt={user.username} />
                        <button onClick={printSessionStorage}>Imprimir session storage</button>
                    </div>
                )}
            </div>

        </>
    );
};

export default Perfil;