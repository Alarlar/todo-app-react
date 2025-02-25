/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styles from './AddTodoForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import InputWithLabel from "../components/InputWithLabel";

// eslint-disable-next-line react/prop-types

const AddTodoForm = ({ onAddTodo }) => {
    // eslint-disable-next-line no-unused-vars
    const [todoTitle, setTodoTitle] = useState('');

    // eslint-disable-next-line no-unused-vars
    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();

        if (todoTitle.trim() === '') return;

        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo} className={styles.form}>
            <InputWithLabel 
            id="todo-title" 
            value={todoTitle} 
            onChange={handleTitleChange}
            >
        Title
      </InputWithLabel>
      <button type="submit" className={styles.button}>Add Todo</button>
    </form>
    );
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;