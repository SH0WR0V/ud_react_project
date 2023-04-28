import React from 'react';
import { useState } from 'react';
import {Header} from './components/Header';
import './App.css';

export const App = () => {

  const [count, setCount] = useState(0);

  function handleAdd(){
    setCount(count + 1);
  }

  function handleSub(){
    setCount(count - 1);
  }

  function handleReset(){
    setCount(0);
  }

  return (
    <div className="App">
        <Header/>
        <h1>Welcome Shahriar!</h1>

        <div className="box">
          <p>{count}</p>
          <button onClick={handleAdd} className="add">Add</button>
          <button onClick={handleSub} className="sub">Sub</button>
          <button onClick={handleReset} className="reset">Reset</button>
        </div>
    </div>
  )
}
