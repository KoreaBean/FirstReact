import axios from "axios";

const apiClient = axios.create(
  {
    baseURL:'http://localhost:8080'
  }
);

export const retret = () => apiClient.get('/hello-worldV2')

export const retretPath
 = (userName) => apiClient.get(`/hello-world/path-variable/${userName}`)

 export const callTodos
 = (userName) => apiClient.get(`/users/${userName}/todos`
 )

export const callDeleteTodo 
= (userName,id) => apiClient.delete(`/users/${userName}/todos/${id}`)

 //http://localhost:8080/users/kim/todos


 export const retrieveTodoApi
= (userName,id) => apiClient.get(`/users/${userName}/todos/${id}`)

export const updateTodoApi
= (userName,id,todo) => apiClient.put(`/users/${userName}/todos/${id}`,todo)