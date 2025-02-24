/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const tableName = import.meta.env.VITE_TABLE_NAME;

const App = () => {
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}`, {
      method: 'GET',
      headers: {
        Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`, 
      },
    }
  );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    
    const todos = data.records.map((record) => ({
      title: record.fields.title,
      id: record.id,
    }))
      .sort((a, b) => a.title.localeCompare(b.title)); // Сортировка по алфавиту
    
    setTodoList(todos);
    setIsLoading(false);

  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
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

  const addTodo = async (newTodo) => {
    try { 
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              title: newTodo.title,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const addedRecord = await response.json();
      setTodoList((prevTodoList) => 
        [...prevTodoList, { title: addedRecord.fields.title, id: addedRecord.id }].sort((a, b) =>
          a.title.localeCompare(b.title)
        )
      );
    } catch (error) {
      console.error(`Add Todo error: ${error.message}`);
    }
  };

  const removeTodo = async (id) => {
    try {
      const response = await fetch(
  `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}/${id}`,
  {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  }
);

if (!response.ok) {
  throw new Error(`Error: ${response.status}`);
}

setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
} catch (error) {
  console.error(`Remove Todo error: ${error.message}`);
  }
};

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">New Todos</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>{tableName} Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
            </>
          }
        />

        <Route
          path="/new"
          element={
            <>
              <h1>New Todo List</h1>
              <p>This page is under development.</p>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;