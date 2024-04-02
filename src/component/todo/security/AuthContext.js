import { createContext, useContext, useState } from "react";



export const AuthContext =  createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

  const [isAuthenticated, setAuthenticated] = useState(false)

  const [userName, setUserName] = useState(null)


  function Login(userName, userPassword){

    if(userName==='kim' && userPassword === 'gyun'){
      setAuthenticated(true)
      setUserName(userName)
      return true

    }else{
      setAuthenticated(false)
      setUserName(null)
      return false
    }
  }

  function Logout(){
    setAuthenticated(false)
  }


  return(
    <AuthContext.Provider value={{ isAuthenticated,Login,Logout,userName}}>
      {children}
    </AuthContext.Provider>
  )
}