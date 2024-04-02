import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext';


export default function LoginComponent(){

  const navi = useNavigate();
  
  const auth = useAuth()


  const [userName, setUserName] =  useState('kim')

  const [userPassword, setUserPassword] = useState('');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);



  function handleUsernameChange(event) {
    setUserName(event.target.value)
  }

  function handleUserPasswordChange(event) {
    setUserPassword(event.target.value)
  }

  function handleSubmit(){

    if(auth.Login(userName,userPassword)){
      console.log("success")
      setShowSuccessMessage(true)
      setErrorMessage(false)
      navi(`/welcome/${userName}`)
    }else{
    console.log("false")
    setShowSuccessMessage(false)
    setErrorMessage(true)

    }
  }

  return(
    
    <div className="Login">
      Todo Management Application
    {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}     
    {errorMessage && <div className='errorMessage'>Authenticated failed</div>}
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input type="text" name="userName" value={userName} onChange={handleUsernameChange}/>
        </div>
        <div>
          <label>User Password</label>
          <input type="password" name="userPassword" value={userPassword} onChange={handleUserPasswordChange}/>
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>login</button>
        </div>
      </div>
    </div>
  )
}
