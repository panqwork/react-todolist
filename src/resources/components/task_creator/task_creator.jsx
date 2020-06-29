import React, {useState} from 'react';

import s from './style.module.scss'


const SelectPriority = (props) => {
	const modsPriority = ['None', 'Easy', 'Middle', 'Hard'];

	const setPriority = (index) => {
		props.changePriority(index)
	}

	return(
		<ul className={s.priority}>
			{modsPriority.map((item, index) => {
					return <li className={s[(index === props.priority)?'active':null]} key={index} onClick={()=>{setPriority(index)}} data-priority={index}>{item}</li>
				}
			)}
		</ul>
	)
}

export const TaskCreator = (props) => {
	class Task {
		constructor(taskName, id, priority) {
			this.taskName = taskName;
			this.id = id;
			this.priority = priority;
			this.completed = false;
		}
	}

	const [inputCurrentText, setInputCurrentText] = useState('');

	const [selectPriority, setSelectPriority] = useState(false);

	const [priority, setPriority] = useState(0);

	const addTask = (e) => {
		e.preventDefault();
		if(inputCurrentText) {
			const id = '#' + Math.random().toString(36).substr(2, 9)
			props.addTask(new Task(inputCurrentText, id, priority))
			setInputCurrentText('');
			setPriority(0)
		}
		
	}

	const changeTextOnInput = (e) => {
		setInputCurrentText(e.target.value);
	}

	const toggleSelectPriorityOnClick = (e) => {
		setSelectPriority(!selectPriority)
	}

	const changePriority = (index) => {
		setPriority(index)
		setSelectPriority(false)
	}

	return(
		<>
			<form onSubmit={addTask} action="POST">
				<input onChange={changeTextOnInput} value={inputCurrentText} type="text"/>
				
				<div className={s.btn_group}>
					<div className={s.select_priority}>
						<button onClick={toggleSelectPriorityOnClick} type="button">Priority</button>
						{
							selectPriority ?
							<SelectPriority priority={priority} changePriority={changePriority}/>:null
						}
					</div>
					<button type="submit">ADD</button>
				</div>
			</form>
		</>
	)
}