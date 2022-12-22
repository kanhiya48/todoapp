import {API_URL} from "./config"
export default (todo,token)=>{
return fetch(`${API_URL}/todos/${todo._id}`,{
    method:'DELETE',
    headers:{
        Authorization:`bearer ${token}`,
        "content-type":'application/json'
    }
  
})
}