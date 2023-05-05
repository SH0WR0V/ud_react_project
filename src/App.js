import React from 'react';
import {Header} from './components/Header';
import {List} from './components/List';
import {Counter} from './components/Counter';
import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';
import './App.css';

function App(){

  return (
      <div className="App">
          <Header/>
          <Counter/>
          <AddTask/>
          <List title="To Complete"/>
          <Footer/>
      </div>
  );
}

export default App;
