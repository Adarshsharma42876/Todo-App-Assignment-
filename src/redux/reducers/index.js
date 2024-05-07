// Retrieve todos from local storage or initialize as empty array
const storedTodos = JSON.parse(localStorage.getItem('todos'));

const initialState = {
  todos: storedTodos ? storedTodos : [],
};

// Reducer function to manage todos state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTodos = [...state.todos, action.payload];
      // Add new task to todos array and update local storage
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case 'DELETE_TASK':
      // Remove task with specified id from todos array and update local storage
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    case 'TOGGLE_TASK':
      // Toggle completion status of task with specified id and update local storage
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(toggledTodos));
      return {
        ...state,
        todos: toggledTodos,
      };
    default:
      return state;
  }
};

export default reducer;
