import React from 'react'

export const ListCard = ({list, deleteTask}) => {
  return (
    <div>
        <li className = {list.completed ? 'completed' : 'incomplete'}>
                        <span>{list.id} - {list.name}</span>
                        <button onClick = {() => deleteTask(list.id)} className='delete'>Delete</button>
        </li>
    </div>
  )
}
