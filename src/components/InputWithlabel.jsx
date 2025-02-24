/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";

const InputWithLabel = ({ todoTitle, handleTitleChange, id, type = "text", children }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      }, []);

    return (
        <>
         <label htmlFor={id}>{children}</label>
        <input
        name={id}
        type={type}
        id={id}
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
            />
        </>
    );
};

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    todoTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
};
export default InputWithLabel;