import React, { useState } from 'react'
import '../App.css'
import loginrequest from '../api/loginrequest'
import {  useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {Token} from '../App'


export const Login=()=>{
const[token,settoken]=useContext(Token);
const [password,setpassword]=useState("");
const[error,seterror]=useState();
const navigate=useNavigate();
const handle=(e)=>{
    e.preventDefault();
     loginrequest(password).then(({token})=>{
        settoken(token);
    navigate('/');
     }).catch((err)=>{
       seterror(err.message);
     })
    
}


    return (
        <div className='App'>
        <h1>Login page</h1>
        <div style={{color :'red'}}>{error}</div>
    <form onSubmit={handle}>

        <label htmlFor="">password</label>
        <input type="password" value={password} placeholder='enter password' onChange={(e)=>{
            setpassword(e.target.value);
        }}/>
      <button>submit</button>
    </form>


        </div>
    )
}