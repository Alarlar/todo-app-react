/* eslint-disable no-unused-vars */


import React from 'react';
import TodoListItem from "../components/TodoListItem";
import PropTypes from "prop-types"; 

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map(todo => (
        <TodoListItem 
          key={todo.id} 
          todo={todo} 
          onRemoveTodo={onRemoveTodo} 
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;