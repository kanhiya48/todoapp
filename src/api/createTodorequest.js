import {API_URL} from "./config"
export default (todo,token)=>{
return fetch(`${API_URL}/todos`,{
    method:'post',
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