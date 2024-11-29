import React from 'react'
import './style.css'
import { Todo } from '../model'

interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => { //another way of assigning props by stating that the component is a functional component
  return (
    <div className='todos'>
      
    </div>
  )
}

export default TodoList
