import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    // Set username to localStorage
    localStorage.setItem('username', username);
    // Set isLoggedIn to true
    setIsLoggedIn(true);
    // Set username state
    setUsername(username);
  };

  const handleLogout = () => {
    // Remove username from localStorage
    localStorage.removeItem('username');
    // Set isLoggedIn to false
    setIsLoggedIn(false);
    // Clear username state
    setUsername('');
  };

  // Check if user is logged in based on localStorage
  // This is useful for persisting login state across page reloads
  React.useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="container">
        {!isLoggedIn ? (
          <div>
            <h1 className="heading">Login</h1>
            <input className='login'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
            <button onClick={() => handleLogin(username)}>Login</button>
          </div>
        ) : (
          <div>
            <h1 className="heading">Simple Todos</h1>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
            <TaskInput />
            <TaskList />
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;
