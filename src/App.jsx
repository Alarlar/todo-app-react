/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`, {
      method: 'GET',
      headers: {
        Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`, 
      },
    });

    if (!response.ok) {
      throw new Error('Error: ${response.status}');
    }

    const data = await response.json();
    
    const todos = data.records.map((record) => ({
      title: record.fields.title,
      id: record.id,
    }));
    
    console.log(todos);

    setTodoList(todos);
    setIsLoading(false);
  } catch (error) {
    console.error('Fetch error: ${error.message}');
    setIsLoading(false);
  }
};
  
  useEffect(() => {
    fetchData(); 
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
    <h1>My Todo List</h1>
    <AddTodoForm onAddTodo={addTodo} />
    {isLoading ? (
      <p>Loading...</p> 
    ) : (
      <>
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      </>
    )}
  </>
  );
};

export default App;