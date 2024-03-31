import axios from "axios";

const apiClient = axios.create(
  {
    baseURL:'http://localhost:8080'
  }
);

export const retret = () => apiClient.get('/hello-worldV2')

export const retretPath
 = (userName) => apiClient.get(`/hello-world/path-variable/${userName}`)

 export const Todos 
 = (userName) => apiClient.get(`/users/${userName}/todos`)