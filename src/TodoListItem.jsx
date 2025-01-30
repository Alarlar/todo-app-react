/* eslint-disable no-unused-vars */

import React from 'react';
import style from "./TodoListItem.module.css"; // Тут импорт css модуля, грубо говоря стиль в отдельном файле будет отражаться у этого файла

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
      <li className={style.ListItem}> {/* класс из модуля */}
        {todo.title}
        <button className={style.removeButton} type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
      </li>
    );
  };
  
  export default TodoListItem;