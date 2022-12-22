

// import TodoModel from "../../../server1/src/models/TodoModel"
import {API_URL} from "./config"
export default (todo,token)=>{
return fetch(`${API_URL}/todos/${todo._id}`,{
    method:'PUT',
    headers:{
        Authorization:`bearer ${token}`,
        "content-type":'application/json'
    },
    body: JSON.stringify({
        text: todo.text,
        completed :todo.completed
    })
}).then(response=>{
//    
  
  
    return (response.json())})
}