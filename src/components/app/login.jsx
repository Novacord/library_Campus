import React from "react";
import { useAuth } from './auth';
import { Navigate } from "react-router-dom";
import { events } from "@react-three/fiber";

const Login = () => {

    const auth = useAuth();

    const login = (data)=>{
        auth.login(data)
    }

    const openWin = ()=>{

    }

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
                                popup.close()
                                sessionStorage.setItem('user', JSON.stringify(event.data))
                                login(event.data)
                            }
                        }
                    })
                }}>
                    <img src="https://i0.wp.com/spaniardperformance.com/wp-content/uploads/2023/04/discord-logo.png?ssl=1" alt="" />
                </button>
                <button className="boton-grande">
                    <img src="" alt="" />
                </button>
            </div>

        </>
    );
};


export default Login;