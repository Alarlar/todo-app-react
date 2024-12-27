/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';

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

export default InputWithLabel;