/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem('todoList')) || [],
          },
        });
      }, 2000); 
    });

    fetchData.then((result) => {
      setTodoList(result.data.todoList); 
      setIsLoading(false); 
    });
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
      {isLoading ? (
        <p>Loading...</p> 
      ) : (
        <>
          <AddTodoForm onAddTodo={addTodo} />
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        </>
      )}
    </>
  );
};

export default App;