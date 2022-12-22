import React from'react'
import {useQuery} from 'react-query'
import readtodosrequest from '../api/readtodosrequest'
import ClipLoader from 'react-spinners/ClipLoader'
import { Todoitem } from '../components/Todoitem'
import CreateTodoform from '../components/createTodoform'
import reactLogo from '../assets/react.svg'
import { useContext } from 'react'
import {Token} from '../App'




export const Todopage=()=>{
    const[token,settoken]=useContext(Token);
   
    const {isLoading ,data:todos}=useQuery('todos',()=> readtodosrequest(token),{enabled:true,});
    return(
        isLoading ? (<ClipLoader size={200}/>):(
        <div className='App'>
            <h2>Tasks to do today</h2>
            { todos.map((todo)=>{
    return <Todoitem todo={todo} token={token}/>
})}
   <CreateTodoform/>


        </div>)
    )
}