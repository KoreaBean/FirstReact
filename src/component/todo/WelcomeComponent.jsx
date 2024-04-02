
import {  Link } from 'react-router-dom'
import { useState } from 'react';

export default function WelcomeComponent(){

 
  const [message,setMessage] = useState(null)


  function callHellowWorldRestApi(){
    console.log("Called")

    // retret()
    // .then( (response) => success(response))
    // .catch((error) => errorResponse(error))
    // .finally( ()=> console.log('finish'))

  //   Todos(userName)
  //   .then( (response) => success(response))
  //   .catch((error) => errorResponse(error))
  //   .finally( ()=> console.log('finish'))
   }
  
  function success(response){
    console.log(response)
    setMessage(response.data.text)
  }

  function errorResponse(error){
    console.log(error)
  }
  return(
    <div>
      <div className="Welcome">
          WelcomeComponent 
          <div><Link to={"/todos"}>Go TO</Link></div>
      </div>
      <div>
        <button className='btn btn-success m-5' onClick={callHellowWorldRestApi}>Call HellowWorldAPI</button>
      </div>
      <div className='text-info'>
        {message}
      </div>
     
    </div>
  )

}