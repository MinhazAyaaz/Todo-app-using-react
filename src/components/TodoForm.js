import React, { useState } from "react";

export const TodoForm = (props) => {
    const [value,setValue] = useState("")
    const [error,setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value===""){
            setError("Input cannot be empty!")
            return;
        }
        props.addTodo(value)
        setValue("")
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        setError("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="What is the task today?" onChange={handleChange} value={value}/>
            <button type="submit" className="todo-btn">Add Task</button>
            {error && <p className="error">{error}</p>}
        </form>
    )
}