import React, { useState, useEffect, useRef } from 'react';

const TodoForm = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <form
            // onSubmit={handleSubmit}
            className='todo-form'>
            <input
                placeholder='Add a todo'
                value={''}
                // onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
            />
            <button
                // onClick={handleSubmit}
                className='todo-button'>
                Add todo
            </button>

        </form>
    );
}

export default TodoForm;
