import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
    const storedTodos = localStorage.getItem("todos");
    const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];
    const [todos, setTodos] = useState(initialTodos);
    const [editingTodoId, setEditingTodoId] = useState(null); // New state for the ID of the editing todo 

    // Save todos to local storage whenever they change
    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
    const addTodo = (todo) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    };
  
    const toggleComplete = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const editTodo = (id) => {
      setEditingTodoId(id); // Set the ID of the editing todo
    };
  
    const editTask = (task, id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task, isEditing: false } : todo // Set isEditing to false for the edited todo
        )
      );
      setEditingTodoId(null); // Clear the editing todo ID
    };
  
    return (
      <div className="TodoWrapper">
        <h1>TODO APP</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) =>
          todo.id === editingTodoId ? ( // Check if the current todo is being edited
            <EditTodoForm editTodo={editTask} task={todo} key={index} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    );
  };
  