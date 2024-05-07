import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import "./index.css"

function TaskList() {
  // Get the list of todos from the Redux store
  const todos = useSelector((state) => state.todos);
  

  return (
    <ul className="todos-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TaskList;