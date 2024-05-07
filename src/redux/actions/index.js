// Action creator to add a new task
export const addTask = (title) => ({
    type: 'ADD_TASK',
    payload: {
      id: Date.now(),
      title,
      completed: false,
    },
  });
  
  // Action creator to delete a task
export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });

// Action creator to toggle the completion status of a task
export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id,
  });