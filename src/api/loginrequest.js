

// import TodoModel from "../../../server1/src/models/TodoModel"
import {API_URL} from "./config"
export default (password)=>{
return fetch(`${API_URL}/login`,{
    method:'POST',
    headers:{
       
        "content-type":'application/json'
    },
    body: JSON.stringify({
       password
    })
}).then(response=>{
    console.log(password)
    if(response.ok){
return (response.json())}
else{throw new Error('login failed')}
})}