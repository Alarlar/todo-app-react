import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Read a book" },
    { id: 3, title: "Take a rest" }
];

function TodoList() {
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;