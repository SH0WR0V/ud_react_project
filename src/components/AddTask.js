import React from 'react';
import { useState } from 'react';
import './AddTask.css';

export const AddTask = ({lists, setLists}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);
    const handleChange = (event) =>{
        setTaskValue(event.target.value);
    }
    const handleReset = () =>{
        setTaskValue("");
        setProgress(false);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const task = {
            id : Math.floor(Math.random()*10000),
            name : taskValue,
            completed : Boolean(progress)
        }
        setLists([...lists, task]);
        handleReset();
    }
  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="task" id="task" placeholder="write your taskname here" autoComplete='off' value={taskValue}></input>
            <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>
            <span className='reset' onClick={handleReset}>Reset</span>
            <button type="submit">Add Task</button>
        </form>
    </section>
  )
}
