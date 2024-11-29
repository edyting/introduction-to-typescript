import React, { useRef } from 'react'
import './style.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void  //this function type returns nothing
}
//in stating the type of the props, it could have been inline [{todo,setTodo}:{ todo:string, setTodo:React.Dispatch<React.SetStateAction<string>>}] but here, we created an interface Props and used it instead to make the code look cleaner.

const InputField = ({todo,setTodo,handleAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur();  //to shift focus 
    }}>
      <input ref={inputRef} type="input" name="" id="" placeholder='Enter a task here' value={todo} 
      onChange={(e)=>setTodo(e.target.value)} className='input__box'/>

      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
