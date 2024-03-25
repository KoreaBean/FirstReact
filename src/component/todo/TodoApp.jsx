import './TodoApp.css'

import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodoComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider from './security/AuthContext'
import { BrowserRouter, Routes,Route } from 'react-router-dom'


export default function TodoApp(){
  return(
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            <Route path='/' element={<LoginComponent/>}/>
            <Route path='/login' element={<LoginComponent/>}/>
            <Route path='/welcome/:userName' element={<WelcomeComponent/>}/>
            <Route path='/todo' element={<ListTodosComponent/>}/>
            <Route path='/Logout' element={<LogoutComponent/>}/>

            <Route path='*' element={<ErrorComponent/>}/>
          </Routes> 
          <FooterComponent/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}



