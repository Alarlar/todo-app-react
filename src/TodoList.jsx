import React from 'react';

const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Read a book" },
    { id: 3, title: "Take a rest" }
];

function TodoList() {
    return (
        <ul>
            {todoList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default TodoList;