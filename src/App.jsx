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
}

export default App;