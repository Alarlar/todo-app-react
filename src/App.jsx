import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = () => {
  const [todoList, setTodoList] = useState([]);

    const addTodo = (title) => {
      setTodoList([...todoList, { id: Date.now(), title }]);
    };

    const removeTodo = (id) => {
      setTodoList(todoList.filter(todo => todo.id !== id));
    };

    return (
        <>
            <h1>My Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
        </> // Фрагмент
    );
};

export default App;