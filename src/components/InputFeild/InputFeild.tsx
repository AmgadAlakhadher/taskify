import React,{useRef} from 'react'
import "./inputfeild.css";

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFeild: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur();
      }
    }>
        <input type="input" placeholder='Enter a task' className='input__box' onChange={(e)=>setTodo(e.target.value)} value={todo} ref={inputRef}/>
        <button className="input__submit" type='submit'>go</button>
    </form>
  )
}

export default InputFeild
