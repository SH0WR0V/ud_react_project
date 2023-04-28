import React from 'react';
import { useState } from 'react';
import './List.css';

export const List = () => {
    const [lists, setLists] = useState([
        {id: 1001, name: "Do Homework", completed: true},
        {id: 1002, name: "Play Pubg", completed: false},
        {id: 1003, name: "Take Dinner", completed: false}
    ])
  return (

        <div className='App'>
            <h2>Task List</h2>
            <ul>
                {lists.map((list) => (
                    <li>
                        <span>{list.id} - {list.name}</span>
                        <button className='delete'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
  
  )
}
