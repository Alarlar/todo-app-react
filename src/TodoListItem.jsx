import React from 'react';

function TodoListItem(props) {
    return (
        <li>
            {props.todo.title} {/* access */}
        </li>
    );
}

export default TodoListItem;