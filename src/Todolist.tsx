import React from 'react';
import {ButtonNameType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id:number)=>void
    filerTasks:(buttonName:ButtonNameType)=>void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((task)=> {
                return(
                    <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span><button onClick={()=> props.removeTask(task.id)}>✖️</button></li>
                    )
            })}
        </ul>
        <div>
            <button onClick={()=>props.filerTasks('all')}>All</button>
            <button onClick={()=>props.filerTasks('active')}>Active</button>
            <button onClick={()=>props.filerTasks('completed')}>Completed</button>
        </div>
    </div>
}
