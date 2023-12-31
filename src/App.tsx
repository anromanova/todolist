import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

export function App() {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ]);

    // crypto.randomUUID() - new global object

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    const addTask=(newTitle : string)=>{
        const newTask = {id: v1(), title: newTitle, isDone: false};
        setTasks([newTask,...tasks])
    }

    const changeTaskStatus = (id:string) => {
        const updatedTasks = tasks.map(t=> t.id === id ? {...t, isDone : !t.isDone} : t)
        setTasks(updatedTasks)
        // return undefined
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask ={addTask}
                      changeTaskStatus={changeTaskStatus}
                      filter={filter}
            />
        </div>
    );
}