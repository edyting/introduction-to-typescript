import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import "./style.css"

interface Props {
    todo:Todo;  
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    
}

const SingleTodo:React.FC<Props>= ({todo,todos,setTodos}) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleIsDone =(id:number)=>{
    setTodos(
      todos.map((todo)=>(todo.id ===id?{...todo,isDone:!todo.isDone}:todo))
    )
  };

  const handleDelete =(id:number)=>{
    setTodos( 
      todos.filter((todo)=> todo.id !== id)
    )
  };

  const handleEdit=(e:React.FormEvent,id:number)=>{
      e.preventDefault();

      setTodos(todos.map((todo)=>(
        todo.id === id? {...todo,todo:editTodo}:todo

      )))

      setEdit(false);
  
  };

  // to switch focus to the input when edit icon is clicked
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputRef.current?.focus();
  },[edit]);

  return (
    <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>
      {
        edit?(
          <input
          ref={inputRef}
          value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} 
          className="todos__single--text" type="text" />
        ):(
             // check if isDone and strike through 
        todo.isDone?(
          <s className='todos__single--text'>{todo.todo}</s> // s tag is for strike tag
        ):(
          <span className='todos__single--text'>{todo.todo}</span>
        )
      
        )
      }
     
      
      <div className="">
        <span className='icon' 
        onClick={()=>{
          if(!edit && !todo.isDone){
             setEdit(!edit);
          }
        }}
        ><CiEdit/></span>

        <span className='icon' onClick={()=>handleDelete(todo.id)}><MdDelete/></span>
        <span className='icon' onClick={()=>handleIsDone(todo.id)}><MdDownloadDone/></span>
      </div>
    </form>
  )
}

export default SingleTodo
