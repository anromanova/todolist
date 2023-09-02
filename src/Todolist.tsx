import React, {useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
    let [newTitle, setNewTitle] = useState('');

    const changeFilterAllHandler = () => {
        props.changeFilter("all")
    }
    const changeFilterActiveHandler = () => {
        props.changeFilter("active")
    }
    const changeFilterCompletedHandler = () => {
        props.changeFilter("completed")
    }
    console.log(newTitle);
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onKeyDown={(event) => {
                console.log(event.key)
                if (event.key === 'Enter' && event.ctrlKey) {
                    props.addTask(newTitle)
                    setNewTitle('')
                }
            }} onChange={(event) => {
                setNewTitle(event.currentTarget.value)
                newTitle = ''
            }}/>
            <button onClick={() => {
                props.addTask(newTitle)
                setNewTitle('')
            }
            }>+
            </button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={changeFilterAllHandler}>All
            </button>
            <button onClick={changeFilterActiveHandler}>Active
            </button>
            <button onClick={changeFilterCompletedHandler}>Completed
            </button>
        </div>
    </div>
}
