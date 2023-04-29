import React from 'react';
import { useState } from 'react';
import { ListCard } from './ListCard';
import './List.css';

export const List = (props) => {
    const [lists, setLists] = useState([
        {id: 1001, name: "Do Homework", completed: true},
        {id: 1002, name: "Play Pubg", completed: false},
        {id: 1003, name: "Take Dinner", completed: false}
    ])

    const [show, setShow] = useState(true);
    const [view, setView] = useState("View");

    function deleteTask(id){
        setLists(lists.filter((list) => list.id !== id ))
    }

    function change() {
        setShow(!show);
        setView( view === "View" ? "Hide" : "View");
    }

  return (

        <div className='App'>
            <h2>Task List {props.title}</h2>
            <ul>
                <button className='trigger' onClick={change}>{view}</button>
                {show && lists.map((list) => (
                    <ListCard key={list.id} list={list} deleteTask={deleteTask}/>
                ))}
            </ul>
        </div>
  
  )
}
