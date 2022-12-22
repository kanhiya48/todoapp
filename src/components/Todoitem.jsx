import react from 'react'
import {QueryClient, useMutation, useQueryClient} from 'react-query'
import updateTodorequest from '../api/updateTodorequest'
import deleteTodorequest from '../api/deleteTodorequest'
import { useState  } from 'react'
import { useEffect } from 'react'
export const Todoitem=({todo,token})=>{
    






       const{mutate: updateTodo}=useMutation((updatedTodo)=>{
             return updateTodorequest(updatedTodo,token)
       },
      { onSettled: ()=>{ queryClient.invalidateQueries('todos');}}
       )
        
       const queryClient=useQueryClient();
    
    
    function dosomemagic(call,d){
        let timeout;
      
        return (...args)=>{
          

          
         
        clearTimeout(timeout);
         timeout=  setTimeout(()=>{
              call(...args);
          },d)
       
        }
    }
    useEffect(()=>{
 window.betterfunction=dosomemagic(updateTodo,1000)},[])





       const{mutate: deleteTodo}=useMutation((deletedTodo)=>{
        return deleteTodorequest(deletedTodo,token)
  },
 { onSettled: ()=>{ queryClient.invalidateQueries('todos');}}
  )

        
       const[value,setvalue]=useState(todo.text);

        return( <div key={todo._id}>
            <input checked={todo.completed}  type="checkbox" onChange={(e)=> {
                // setvalue(e.target.value);
                updateTodo({
                ...todo,
                completed: e.target.checked
            })}}/>
            <input type="text" value={value}  onChange={(e)=> 
            {
                 setvalue(e.target.value);
                
            betterfunction({
                ...todo,
                text: e.target.value
            })}}/>
          <button onClick={()=>{
           deleteTodo(todo)
          }}>delete</button>
          
           </div>)
  
}