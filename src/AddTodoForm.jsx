import React from 'react';

function AddTodoForm(props) {
    const handleAddToDo = (event) => {
        event.preventDefault();
        const toDoTitle = event.target.title.value;
        console.log(toDoTitle);
        props.onAddToDo(toDoTitle);
        event.target.title.value = '';

    }
    return (
        <form onSubmit={handleAddToDo}>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;