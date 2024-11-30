import './App.css'
import React, {useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
    const [newToDo, setNewToDo] = useState('');
  return (
      <div>
        <h1>My Todo List</h1>
        <AddTodoForm onAddToDo = {setNewToDo}/>
        <TodoList />
        <p>{newToDo}</p>
      </div>
  );
}

export default App
