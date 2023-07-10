import React, { useState,useRef,useEffect } from 'react'
import { Todo } from '../interfaces/Todos'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './singletodo.css';
import TodoList from '../TodoList/TodoList';

interface Props{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({todo,todos,setTodos}) => {
    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);
    
    
    const handleDone = (id:number) =>{
        setTodos(
            todos.map((todo) => todo.id === id? {...todo, isDone: !todo.isDone}: todo)
        );
    }
    const handleDelete = (id:number) => setTodos(
        todos.filter((todo) => todo.id !== id)
    );
    const handleEdit = (e:React.FormEvent,id:number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === id? {...todo,todo: editTodo}: todo));
        setEdit(false);
    }
    useEffect(() =>{
        if(edit === true) inputRef.current?.focus();
    }, [edit] );


    return (
        <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>
            {
                edit && !todo.isDone?(
                    <input type="text" ref={inputRef} className="todos__single--text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
                ) :(
                    todo.isDone? (
                        <s className="todos__single--text">{todo.todo}</s>
                    ):(
                        <span className="todos__single--text">{todo.todo}</span>
                    )
                )
            }
            <div className="todos__single--icons">
                <span className="icon" onClick={()=>setEdit(!edit)}><AiFillEdit /></span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
                <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone /></span>
            </div>
        </form>
    )
}

export default SingleTodo
