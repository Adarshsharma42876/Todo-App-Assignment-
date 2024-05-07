import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';
import "./index.css"

function TaskInput() {
  // State to manage the input value
  const [title, setTitle] = useState('');

  // Redux dispatch function
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim() !== '') {
      // Dispatch the addTask action with the title
      dispatch(addTask(title));

      // Clear the input field
      setTitle('');
    }
  };

  return (
    <div className="add-todo">
      <div className='user-input-container'>
      <input
        className='user-input'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      </div>
      
      <button className='add-btn' onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TaskInput;