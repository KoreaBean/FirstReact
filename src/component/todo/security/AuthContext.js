import { createContext, useContext, useState } from "react";



export const AuthContext =  createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

  const [isAuthenticated, setAuthenticated] = useState(false)


  function Login(userName, userPassword){

    if(userName==='kim' && userPassword === 'gyun'){
      setAuthenticated(true)
      return true

    }else{
      setAuthenticated(false)
      return false
    }
  }

  function Logout(){
    setAuthenticated(false)
  }


  return(
    <AuthContext.Provider value={{ isAuthenticated,Login,Logout}}>
      {children}
    </AuthContext.Provider>
  )
}