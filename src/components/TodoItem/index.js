import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/actions';
import "./index.css"

function TodoItem({ todo }) {
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions

  // Function to handle task deletion
  const handleDeleteTask = () => {
    dispatch(deleteTask(todo.id)); // Dispatch deleteTask action with todo id
  };

  // Function to handle toggling task completion status
  const handleToggleTask = () => {
    dispatch(toggleTask(todo.id)); // Dispatch toggleTask action with todo id
  };

  return (
    <li className={todo.completed ? 'todo-item-completed' : 'todo-item'}>
      <input
      className='check-box'
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTask}
      />
      <p className="title">{todo.title}</p>
      <button  className='delete-btn' onClick={handleDeleteTask}>Delete</button>
    </li>
  );
}

export default TodoItem;