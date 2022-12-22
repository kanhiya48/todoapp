// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import React, { createContext } from 'react'
import './App.css'
// import {useQuery} from 'react-query'
// import readtodosrequest from '../api/readtodosrequest'
// import ClipLoader from 'react-spinners/ClipLoader'
// import { Todoitem } from '../components/Todoitem'
// import CreateTodoform from '../components/createTodoform'
import { Todopage } from './pages/Todopages'
import { Login } from './pages/login'
import {Routes,Route,Navigate} from 'react-router-dom'
import React ,{useContext, useState} from 'react'

export  const Token=React.createContext();

const Protectedcomponent=({element})=>{
  const [token,settoken]=useContext(Token);
return(
  token ? element(): <Navigate to='/login'/>
  
)
}
function App() {
 const[token,settoken]=useState(null);
 

  return(
   
    <div className='App'>
     {
       <Token.Provider value={[token,settoken]}>
      <Routes>
       
      <Route path="/" element={<Protectedcomponent element={Todopage}/>} />
      <Route path="/login" element={< Login/>} />
      
    </Routes>
    </Token.Provider>}
    </div>
  )}


export default App
