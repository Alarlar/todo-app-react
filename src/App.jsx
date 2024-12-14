import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = useState( JSON.parse(localStorage.getItem('list')) ||  []);
  
  useEffect( () => {
    
    localStorage.setItem('list', JSON.stringify(todoList)) 
  }, [todoList]) // пустой зависимый массив
  return [todoList, setTodoList];
} 

function App() {
    const [todoList, setTodoList] = useSemiPersistentState(); // без аргумента

    const addTodo = (newTodo) => {
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    };



    return (
        <div>
            <h1>My Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} />
        </div>
    );
}

export default App;