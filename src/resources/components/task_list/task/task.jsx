import React, { useState } from 'react';

import s from './style.module.scss';

export const Task = (props) => {
	const {taskName, id} = props.data

	const [editMode, setEditMode] = useState(false)

	const [inputCurrentText, setInputCurrentText] = useState(taskName);

	const changeText = (e) => {
		setInputCurrentText(e.target.value);
	}

	const saveRename = () => {
		if(inputCurrentText !== taskName) {
			props.editTask(id, inputCurrentText)
		}	
		setEditMode(false);
	}

	const cancelRename = () => {
		setInputCurrentText(taskName)
		setEditMode(false);
	}

	return(
		<div className={s.task}>
			{
				editMode 
				?
				<>
					<input onChange={changeText} type="text" autoFocus={true} value={inputCurrentText}/> 
					<button onClick={saveRename}>save</button>
					<button onClick={cancelRename}>cancel</button>
				</>
				
				: 
				<>
					<button onClick={()=>{
						props.completeTask(id)
					}}>complete</button>
					{taskName}
					<button onClick={()=>{
					props.removeTask(id)
					}}>delete</button>
					<button onClick={()=>{
					setEditMode(true)
					}}>rename</button>
				</>
			}
		</div>
	)
}