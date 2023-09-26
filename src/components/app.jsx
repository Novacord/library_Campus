import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react"
import Nav from "./app/nav"
import Home from './app/nav/home'
import { AuthProvider, AutRoute } from './app/auth'
import Informacion from './app/nav/informacion'
// import InformacionPost from './app/nav/InformacionPost'
import  Login  from './app/login'
import Logoaut from './app/nav/logoaut'
import Perfil from './app/nav/perfil'
import Reservar from './app/nav/reservar'
import Error from './app/error'



const App = () =>{
    return(
    <div>
        <BrowserRouter>
            <AuthProvider>
                <Nav/>
                    <Routes>
                        <Route path='/' element={<Home />}  />
            
                        <Route path='/informacion/' element={<Informacion/>}  />
            
                        <Route path='/login' element={<Login />}  />
                        <Route path='/logoaut' element={<AutRoute><Logoaut /></AutRoute>} />
            
                        <Route path='/perfil' element={<AutRoute><Perfil /></AutRoute>} />
                        <Route path='/reservar' element={<Reservar />} />

                        <Route path='/error' element={<Error />} />
            
                        <Route path='*' element={<p>Not Found</p>} />
                    </Routes>

                <footer>
                    <div>
                        <h2>Autor</h2>
                        <p>Jose Daniel Nova Muñoz</p>
                    </div>
                    <div>
                        <h2>Redes Sociales</h2>
                        <div className='redes'>
                            <div>
                                <p>linkeding</p>
                                <p>instagram</p>
                            </div>
                            <div>
                                <p>git hub</p>
                                <p>Discord</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </AuthProvider>
        </BrowserRouter>
    </div>
    )
}

export default App