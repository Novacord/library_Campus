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

function AutRoute(props) {
    const auth = useAuth()
    const items = sessionStorage.getItem('user');
    console.log(items)
    if (!items) { 
        return <Navigate to="/" />
    }
    return props.children
}


function AutRouteAdmin(props){
    const auth = useAuth()

    const items = sessionStorage.getItem('admin');
    if (!items) {
        return <Navigate to="/" />
    }

    return props.children
}

export { AuthProvider, useAuth, AutRoute, AutRouteAdmin }