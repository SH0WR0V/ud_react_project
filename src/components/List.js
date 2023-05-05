import React from 'react';
import { useState } from 'react';
import { ListCard } from './ListCard';
import { BoxCard } from './BoxCard';
import './List.css';

export const List = (props) => {
    const [lists, setLists] = useState([
        {id: 1001, name: "Do Homework", completed: true},
        {id: 1002, name: "Play Pubg", completed: false},
        {id: 1003, name: "Take Dinner", completed: false}
    ])

    const [show, setShow] = useState(true);

    function deleteTask(id){
        setLists(lists.filter((list) => list.id !== id ))
    }

    function change() {
        setShow(!show);
    }

  return (

        <div className='App'>
            <h2>Task List {props.title}</h2>
            <ul>
                <button className='trigger' onClick={change}>{show ? "Hide" : "Show"}</button>
                {show && lists.map((list) => (
                    <ListCard key={list.id} list={list} deleteTask={deleteTask}/>
                ))}
            </ul>

            <BoxCard result="success">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veniam?</p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">Lorem ipsum dolor</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur</p>
            </BoxCard>
        </div>
  
  )
}
