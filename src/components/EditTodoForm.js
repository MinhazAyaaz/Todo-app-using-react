import React, { useState } from "react";

export const EditTodoForm = (props) => {
    const [value,setValue] = useState(props.task.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.editTodo(value, props.task.id)
        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="Write your updated task" onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}