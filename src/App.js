import React from 'react';
import {Header} from './components/Header';
import {List} from './components/List';
import {Counter} from './components/Counter';
import './App.css';

function App(){

  return (
      <div className="App">
          <Header/>
          <Counter/>
          <List title="To Complete"/>
      </div>
  );
}

export default App;
