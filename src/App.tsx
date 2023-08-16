import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const param = 'param1';

    const tasks1 = [
        {id:1, title: "HTML&CSS", isDone: true},
        {id:2, title: "JS", isDone: true},
        {id:3, title: "ReactJS", isDone: false},
    ]
    const tasks2 = [
        {id:1, title: "Hello World", isDone: true},
        {id:2, title: "I am happy", isDone: false},
        {id:3, title: "Hi", isDone: false},
    ]

    return (
        <div className="App">
           <Todolist tasks={tasks1}/>
           <Todolist tasks={tasks2}/>
        </div>
    );
}

export default App;
