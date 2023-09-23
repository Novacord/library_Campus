import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

const adminList = ['a', 'b', 'c']

const AuthContext = React.createContext()

function AuthProvider({ children }){

    const navigate = useNavigate()

    const [user, setUser] = React.useState(null)

    const login = (data)=>{
        setUser(data)
        navigate('/perfil')
    }

    const logoaut = ()=>{
        setUser(null)
        navigate('/')
    }

    const auth = {user, login, logoaut}

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const auth = React.useContext(AuthContext)
    return auth
}

function AutRoute(props){
    const auth = useAuth()

    const items = sessionStorage.getItem('items');
    if (items) {
        // Redirige al usuario a la ruta principal
        return <Navigate to="/" />
    }

    auth.user = items

    if (auth.user) {
        return <Navigate to="/login" />
    }

    return props.children
}
export { AuthProvider, useAuth, AutRoute }