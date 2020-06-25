import React from 'react';

import s from './style.module.scss';

export const Task = (props) => {
    const {taskName, id} = props.data
    return(
        <div className={s.task}>
            <button onClick={()=>{
                props.completeTask(id)
            }}>complete</button>
            {taskName}
            <button onClick={()=>{
                props.removeTask(id)
            }}>delete</button>
        </div>
    )
}