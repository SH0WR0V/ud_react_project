import React from 'react';
import {Header} from './components/Header';
import {List} from './components/List';
import {Counter} from './components/Counter';
import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';
import { useState } from 'react';
import './App.css';

function App(){

  const [lists, setLists] = useState([]);

  return (
      <div className="App">
          <Header/>
            <main>
              <Counter/>
              <AddTask lists={lists} setLists={setLists}/>
              <List title="To Complete" lists={lists} setLists={setLists} />
            </main>
          <Footer/>
      </div>
  );
}

export default App;
