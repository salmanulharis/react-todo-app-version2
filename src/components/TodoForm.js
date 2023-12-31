import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const handleChange = e => {
        setInput(e.target.value);
    }
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input type='text' placeholder='Update todo' value={input} name='text' className='todo-input edit' onChange={handleChange} ref={inputRef}/>
            <button className='todo-button edit'>Update</button>
            </>
        ) : (
            <>
            <input type='text' placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>
            <button className='todo-button'>Add todo</button>
            </>
        )}
        
    </form>
  )
}

export default TodoForm