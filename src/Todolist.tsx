import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

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

    // const changeFilterAllHandler = () => {
    //     props.changeFilter("all")
    // }
    // const changeFilterActiveHandler = () => {
    //     props.changeFilter("active")
    // }
    // const changeFilterCompletedHandler = () => {
    //     props.changeFilter("completed")
    // }

    const changeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const mapped = props.tasks.map(t => {
        const removeTaskHandler = () => {
            props.removeTask(t.id)
        }
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <Button name={'x'} callBack={removeTaskHandler}/>
            </li>
        )
    })

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && event.ctrlKey) {
            addTaskHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
        newTitle = ''
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onKeyDown={onKeyDownHandler}
                   onChange={onChangeHandler}/>
            <Button name={'+'} callBack={addTaskHandler}/>
        </div>
        <ul>{mapped}</ul>
        <div>
            <Button name={'All'} callBack={() => changeFilterHandler('all')}/>
            <Button name={'Active'} callBack={() => changeFilterHandler('active')}/>
            <Button name={'Completed'} callBack={() => changeFilterHandler('completed')}/>
        </div>
    </div>
}
