

import {API_URL} from "./config"
export default (token)=>{
    // console.log("bhjvfbfh",token)
return fetch(`${API_URL}/todos`,{
    method:'GET',
    headers:{
        Authorization:`bearer ${token}`,
        "content-type":'application/json'
    }
}).then(response=>{
//    
//   console.log(response.json())
  
    return (response.json())})
}