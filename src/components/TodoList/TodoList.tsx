import React from 'react'
import { Todo } from '../interfaces/Todos';
import SingleTodo from '../SingleTodo/SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({todos,setTodos}) => {
    return (
    <div className="container">
        {
            todos.map((t) => (
                <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
            ))
        }
    </div>
    )
}

export default TodoList
