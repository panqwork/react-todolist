import React from 'react';

export const Task = (props) => {
    const {taskName} = props.data
    return(
        <>
            {taskName}
            <button>delete</button>
        </>
    )
}