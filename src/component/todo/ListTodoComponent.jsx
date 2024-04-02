import { useEffect, useState } from "react";
import { callDeleteTodo, callTodos } from "./api/hellowApi";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent(){

  const use = useAuth()
  const userName = use.userName
  const navigate = useNavigate()

  console.log('userName :'+userName)

  const today = new Date();
  const targetDate = new Date(today.getFullYear()+12, today.getMonth(),today.getDay());

  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState(null)


  // const todos = [
  //   {id:1,description : 'Learn AWS',done:false,targetDate:targetDate},
  //   {id:2, description : "world",done:false,targetDate:targetDate},
  //   {id:3, description : "world!!!!",done:false,targetDate:targetDate}]

  useEffect(
    () => {
      refreshTodos()},[]
  )

  function refreshTodos(){
    callTodos(userName)
  .then(response => {
    setTodos(response.data)
    console.log(todos)
  })
  .catch(response => console.log(response))
  }

  function DeleteTodo(id){
    callDeleteTodo(userName,id)
    .then(() => {
      setMessage(`Delete Todo ${id} success`)
      refreshTodos()

    })
  }

  function updateGotoTodo(id){

    navigate(`/todo/${id}`)

  }


  return(
    <div className='container'>
      <h1>TodoComponent</h1>
      {message&&<div className="alert alert-warning">{message}</div>}
      <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Is done?</th>
            <th>Target Date</th>
            <th>Delete</th>
            <th>Update</th>

          </tr>
        </thead>
        <tbody>
          {
            todos.map(
              todo => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td><button className="btn btn-warning" onClick={() => DeleteTodo(todo.id)}>Delete</button></td>
                <td><button className="btn btn-success" onClick={ () => updateGotoTodo(todo.id)}>Update</button></td>

              </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  )
}

