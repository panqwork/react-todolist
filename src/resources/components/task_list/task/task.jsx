import React, { useState } from 'react';
import {Bin, Edit} from '../../generic/svg_icons.jsx';

import s from './style.module.scss';

export const Task = (props) => {
	const {taskName, id, completed} = props.data
	let completedClass = completed ? 'completed': null
	const [editMode, setEditMode] = useState(false)

	const [inputCurrentText, setInputCurrentText] = useState(taskName);

	const changeText = (e) => {
		setInputCurrentText(e.target.value);
	}

	const saveRename = () => {
		if(inputCurrentText !== taskName) {
			props.editTask(id, inputCurrentText);
		}	
		setEditMode(false);
	}

	const cancelRename = () => {
		setInputCurrentText(taskName)
		setEditMode(false);
	}

	const completeTaskOnClick = (e) => {
		props.completeTask(id);
	}
	const removeTaskOnClick = () => {
		props.removeTask(id)
	}
	const renameTaskOnClick = () => {
		setEditMode(true)
	}

	return(
		
		<div data-priority={props.data.priority} className={[s.task, s[completedClass]].join(' ')}>
			{
				editMode 
				?
				<div className={s.rename_tools}>
					<input onChange={changeText} type="text" autoFocus={true} value={inputCurrentText}/> 
					<button onClick={saveRename}>save</button>
					<button onClick={cancelRename}>cancel</button>
				</div>
				
				: 
				<>
					<button className={s.complete_btn} disabled={completed} onClick={completeTaskOnClick}></button>

					<p>
						{taskName}
					</p>
					<div className={s.btn_group}>
						<button onClick={removeTaskOnClick}><Bin/></button>
						<button onClick={renameTaskOnClick}><Edit/></button>
					</div>
					
				</>
			}
		</div>
	)
}