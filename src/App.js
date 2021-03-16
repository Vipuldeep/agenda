import React from 'react';
import './App.scss';
import TodoList from './TodoList';
import { useMediaQuery } from 'react-responsive'

function App() {
  return (
    <div className="todo-app">
     <TodoList />
    </div>
  );
}

export default App;
