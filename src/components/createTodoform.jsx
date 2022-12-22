import { useState } from "react";
import {Token} from '../App'
import react from 'react'
import {QueryClient, useMutation, useQueryClient} from 'react-query'
import createTodorequest from '../api/createTodorequest'
import { useContext } from "react";
export default ()=>{
    const[token,settoken]=useContext(Token);
    const queryClient=useQueryClient();
    const{mutate: createTodo}=useMutation((createdTodo)=>{
        return createTodorequest(createdTodo,token)
  },
 { onSettled: ()=>{ queryClient.invalidateQueries('todos');}}
  )
const[item,setitem]=useState({});
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <input value={item.text} onChange={(e)=>{setitem({text:e.target.value })}} type="text" />
            <button onClick={async()=>{
                
                createTodo(
                    item
                ) 
                await setitem({
                    text:""
                });
            }}>create</button>
        </form>
    )
}