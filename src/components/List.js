import React from 'react';
import { useState } from 'react';
import { ListCard } from './ListCard';
import { BoxCard } from './BoxCard';
import './List.css';

export const List = ({lists, setLists}) => {

    const [show, setShow] = useState(true);

    function deleteTask(id){
        setLists(lists.filter((list) => list.id !== id ))
    }

    function change() {
        setShow(!show);
    }

  return (

        <section className='App'>
            <ul>
                <div className='header'>
                    <h2>TaskLists</h2>
                    <button className='trigger' onClick={change}>{show ? "Hide" : "Show"}</button>
                </div>
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
        </section>
  
  )
}
