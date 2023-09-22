import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react"
import Nav from "./app/nav"
import Home from './app/nav/home'
import { AuthProvider, AutRoute } from './app/auth'
import Informacion from './app/nav/informacion'
import InformacionPost from './app/nav/InformacionPost'
import Login from './app/nav/login'
import Logoaut from './app/nav/logoaut'
import Perfil from './app/nav/perfil'
import Reservar from './app/nav/reservar'


const App = () =>{
    return(
    <div>
        <BrowserRouter>
            <AuthProvider>
                <Nav/>
                    <Routes>
                        <Route path='/' element={<Home />}  />
            
                        <Route path='/informacion/' element={<Informacion/>}  />
                        <Route path='/informacion/:slug' element={<InformacionPost />}  />
            
                        <Route path='/login' element={<Login />}  />
                        <Route path='/logoaut' element={<AutRoute><Logoaut /></AutRoute>} />
            
                        <Route path='/perfil' element={<AutRoute><Perfil /></AutRoute>} />
                        <Route path='/reservar' element={<AutRoute><Reservar /></AutRoute>} />
            
                        <Route path='*' element={<p>Not Found</p>} />
                    </Routes>

                <footer></footer>
            </AuthProvider>
        </BrowserRouter>
    </div>
    )
}

export default App