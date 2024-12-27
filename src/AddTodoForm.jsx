/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
import InputWithLabel from './InputWithlabel';

// eslint-disable-next-line react/prop-types

const AddTodoForm = () => {
    // eslint-disable-next-line no-unused-vars
    const [todoTitle, setTodoTitle] = useState('');

    // eslint-disable-next-line no-unused-vars
    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel 
            id="todo-title" 
            value={todoTitle} 
            onChange={handleTitleChange}
            >
        Title
      </InputWithLabel>
      <button type="submit">Add Todo</button>
    </form>
    );
};

export default AddTodoForm;