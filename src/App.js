import React from 'react';
import './App.scss';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
     <h1 className="heading">Agenda</h1>
     <TodoList />
    </div>
  );
}

export default App;
