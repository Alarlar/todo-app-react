import React from 'react';

function TodoListItem(props) {
    return (
        <li>
            {props.todo.name} {/* access */}
        </li>
    );
}

export default TodoListItem;