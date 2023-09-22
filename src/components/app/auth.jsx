import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

const adminList = ['a', 'b', 'c']

const AuthContext = React.createContext()

function AuthProvider({ children }){

    const navigate = useNavigate()

    const [user, setUser] = React.useState(null)

    const login = ({ username })=>{
        const isAdmin = adminList.find(admin => admin === username)
        setUser({ username, isAdmin })
        navigate('/profile')
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

    if (!auth.user) {
        return <Navigate to="/login" />
    }

    return props.children
}

export { AuthProvider, useAuth, AutRoute }