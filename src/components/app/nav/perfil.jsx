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
    console.log(user)
    return (
        <>
            <div className='div-centrado'>
                {user && ( 
                    <div>
                        <h1>{user.username}</h1>
                        <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} alt={user.username} />
                    </div>
                )}
            </div>

        </>
    );
};

export default Perfil;