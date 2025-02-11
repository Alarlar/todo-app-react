/* eslint-disable no-unused-vars */

import React from 'react';
import style from "./TodoListItem.module.css"; // Тут импорт css модуля, грубо говоря стиль в отдельном файле будет отражаться у этого файла
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
      <li className={style.ListItem}> {/* класс из модуля */}
        {todo.title}
        <button className={style.removeButton} type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
      </li>
    );
  };
  
  TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
  };

  export default TodoListItem;