/* eslint-disable no-undef */
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = () => {

  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  
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
      setLoading(false); 
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList, loading]);


  function addTodo(newTodo) {
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    }

  const removeTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>My Todo List</h1>
      {loading ? (
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