import React, {useState} from 'react';
import {ButtonNameType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    // filerTasks:(buttonName:ButtonNameType)=>void
}

export function Todolist(props: PropsType) {
    let filteredTasksArray = props.tasks;
    let [filterButtonName, setFilterButtonName] = useState("all")
    if (filterButtonName === "active") {
        filteredTasksArray = props.tasks.filter(task => task.isDone)
    }

    if (filterButtonName === "completed") {
        filteredTasksArray = props.tasks.filter(task => !task.isDone)
    }

    const filerTasks = (buttonName: ButtonNameType) => {
        setFilterButtonName(buttonName)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTasksArray.map((task) => {
                return (
                    <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                        <button onClick={() => props.removeTask(task.id)}>✖️</button>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => filerTasks('all')}>All</button>
            <button onClick={() => filerTasks('active')}>Active</button>
            <button onClick={() => filerTasks('completed')}>Completed</button>
        </div>
    </div>
}
