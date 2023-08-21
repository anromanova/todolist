import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type ButtonNameType = 'all' | 'active' | 'completed'
function App() {

    let[tasks, setTasks]=useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    let filteredTasksArray = tasks
    let[filterButtonName, setFilterButtonName] =useState("all")
    if (filterButtonName === "active") {
        filteredTasksArray = tasks.filter(task => task.isDone)
    }

    if (filterButtonName === "completed") {
        filteredTasksArray = tasks.filter(task => !task.isDone)
    }
    const removeTask =(id:number)=> {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const filerTasks=(buttonName:ButtonNameType)=> {
        setFilterButtonName(buttonName)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filteredTasksArray} removeTask={removeTask} filerTasks={filerTasks}/>
        </div>
    );
}

export default App;
