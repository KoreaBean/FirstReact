import { createContext, useState } from "react";


//create a Context

export const AuthContext =  createContext();
//Put some state in the context
//Share the created context with other components

export default function AuthProvider({children}){

  const [number, setNumber] = useState(0)


  return(
    <AuthContext.Provider value={number}>
      {children}
    </AuthContext.Provider>
  )
}