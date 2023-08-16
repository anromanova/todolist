import React from "react";
import PropTypes from "prop-types";

type PropsType = {
    param?: string
    tasks: TaskType[]
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.param}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(item => {
                    return (
                        <li><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}