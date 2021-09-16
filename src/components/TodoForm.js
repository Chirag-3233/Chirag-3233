import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
    const inputRef = useRef(null);
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    useEffect(() => {
        inputRef.current.focus();
    });
    const handleChange = e => {
        setInput(e.target.value);
    };
    return (
        <form
            // onSubmit={handleSubmit}
            className='todo-form'>
            <input
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
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
