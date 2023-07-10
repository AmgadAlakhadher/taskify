import React, {useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild/InputFeild';
import { Todo } from './components/interfaces/Todos';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">
        taskify
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </span>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
