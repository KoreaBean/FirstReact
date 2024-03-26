import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodoComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom'
import FooterComponent from './FooterComponent'


function Authentication({children}){

  const userAuthen = useAuth()

  if(userAuthen.isAuthenticated){
    return children
  }
  return <Navigate to="/"/>
}

export default function TodoApp(){
  return(
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent/>
            <Routes>
              <Route path='/' element={<LoginComponent/>}/>
              <Route path='/login' element={<LoginComponent/>}/>
                <Route path='/welcome/:userName' element={<Authentication><WelcomeComponent/></Authentication>}/>
                <Route path='/todos' element={<Authentication><ListTodosComponent/></Authentication>}/>
              <Route path='/Logout' element={<LogoutComponent/>}/>

              <Route path='*' element={<ErrorComponent/>}/>
            </Routes> 
          <FooterComponent/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}



