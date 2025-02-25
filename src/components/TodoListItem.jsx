/* eslint-disable no-unused-vars */

import React from 'react';
import style from "./TodoListItem.module.css"; // Тут импорт css модуля, грубо говоря стиль в отдельном файле будет отражаться у этого файла
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}> { }
      {todo.title}
      <button 
        className={style.removeButton} 
        type="button" 
        onClick={() => onRemoveTodo(todo.id)}
      >
        Remove
      </button>
    </li>
  );
};
  
TodoListItem.propTypes = {
  todo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

  export default TodoListItem;