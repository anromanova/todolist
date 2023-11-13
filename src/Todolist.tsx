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
  changeTaskStatus: (taskId: string) => void
  addTask: (newTitle: string) => void
  filter: FilterValuesType
}

// Todolist: React.FC<PropTypes>
export function Todolist(props: PropsType) {
  let [newTitle, setNewTitle] = useState('');
  let [inputError, setInputError] = useState(false)

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

    const onChangeTaskStatusHandler = () => {
      props.changeTaskStatus(t.id)
    }


    return (
      <li key={t.id} className={t.isDone ? 'taskDone' : 'task'}>
        <input type="checkbox" checked={t.isDone} onChange={onChangeTaskStatusHandler}/>
        <span>{t.title}</span>
        <Button name={'x'} callBack={removeTaskHandler}/>
      </li>
    )
  })

  // if we want all props have the same names id={t.id} titme={t.title}
  // <Task {...t} removeTask={removeTask}/>

  const addTaskHandler = () => {
    const trimmedTitle = newTitle.trim()
    if (trimmedTitle) {
      props.addTask(trimmedTitle)
      setNewTitle('')
    }
      // else {
    //   setInputError(true)
    // }
  }

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.ctrlKey) {
      addTaskHandler()
    }
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    inputError && setInputError(false)
    const trimmedTitle = event.target.value.trim();
    if(trimmedTitle || event.target.value.length === 0) {
      setNewTitle(event.currentTarget.value)
    }
    newTitle = ''
  }

  const isAddBtnDisabled = !newTitle || newTitle.length >= 15 || newTitle.length <= 1
  const userMessage = inputError
    ? <span>Enter task title</span>
    : newTitle.length < 15
      ? <span>Enter task title</span>
      : <span>Task title is too long</span>

  return <div>
    <h3>{props.title}</h3>
    <div className={'input-wrapper'}>
      <div>
        <input value={newTitle}
               className={inputError ? 'error' : undefined}
               onKeyDown={onKeyDownHandler}
               onChange={onChangeHandler}/>
        <Button isAddBtnDisabled={isAddBtnDisabled}
                name={'+'}
                callBack={addTaskHandler}/>
      </div>
      {userMessage}
    </div>
    <ul>{mapped}</ul>
    <div className={'inline'}>
      <Button className={props.filter === 'all' ? 'btnFilterActive' : 'btn'} name={'All'}
              callBack={() => changeFilterHandler('all')}/>
      <Button className={props.filter === 'active' ? 'btnFilterActive' : 'btn'} name={'Active'}
              callBack={() => changeFilterHandler('active')}/>
      <Button className={props.filter === 'completed' ? 'btnFilterActive' : 'btn'} name={'Completed'}
              callBack={() => changeFilterHandler('completed')}/>
    </div>
  </div>
}
