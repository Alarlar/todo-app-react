/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";

const InputWithLabel = ({ value, onChange, id, type = "text", children }) => {
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
        value={value}
        onChange={onChange}
        ref={inputRef}
            />
        </>
    );
};

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
};

export default InputWithLabel;