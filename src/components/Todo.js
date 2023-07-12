import React from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ReplayIcon from '@mui/icons-material/Replay';

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

    return(
        <div className="Todo">
            <p className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
            <IconButton aria-label="delete" size="small" onClick={() => toggleComplete(task.id)}>
                {task.completed ? <ReplayIcon fontSize="inherit" /> : <DoneIcon fontSize="inherit" />}
            </IconButton>
            <IconButton aria-label="delete" size="small" onClick={() => editTodo(task.id)}>
                <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="small" onClick={() => deleteTodo(task.id)}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            </div>
        </div>
    )
}