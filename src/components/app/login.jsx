import React from "react";
import { useAuth } from './auth';
import { Navigate } from "react-router-dom";
import { events } from "@react-three/fiber";

const Login = () => {

    const auth = useAuth();

    const login = (data)=>{
        auth.login(data)
        window.location.reload();
    }

    return (
        <>
            <div className='div-centrado'>
                <button type="submit" className="boton-grande" onClick={()=>{
                    const popup = window.open(
                        "http://127.10.10.10:5000/api/user/login",
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
                        if (event.origin === 'http://127.10.10.10:5000/'){
                            if(event.data){
                                sessionStorage.setItem('user', JSON.stringify(event.data))
                                popup.close()
                                login(event.data)
                            }
                        }
                    })
                }}>
                    <img src="https://i0.wp.com/spaniardperformance.com/wp-content/uploads/2023/04/discord-logo.png?ssl=1" alt="" />
                </button>
                <button className="boton-grande">
                    <img src="https://cdn-icons-png.flaticon.com/512/195441.png" alt="" />
                </button>
            </div>

        </>
    );
};

export default Login;
