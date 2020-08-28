import React from 'react';
import './App.css';
import Motivator from './Motivator';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <p className='logo'>coach me pls !</p>
      </header>
      <div className='content'>
        <Motivator />
      </div>
    </div>
  ); 
}

export default App;
