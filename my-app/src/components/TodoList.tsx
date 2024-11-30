import React from 'react'
import './style.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props{
    //  id:number;
    // todo:Todo;
    // isDone:boolean;
    todos:Todo[]; 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => { //another way of assigning props by stating that the component is a functional component
  return (
    <div className='todos'>
      {todos.map((todo)=>( 
        <div >
          <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
        </div>
     
      ))}
    </div>
  )
}

export default TodoList
