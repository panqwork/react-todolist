import React, {useState} from 'react';

import s from './style.module.scss';

import {Button, Input} from '../../ui/atoms/index.js';


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
			this.completed = 0;
		}
	}

	const [inputCurrentText, setInputCurrentText] = useState('');

	const [selectPriority, setSelectPriority] = useState(false);

	const [priority, setPriority] = useState(0);

	const addTask = (e) => {
		e.preventDefault();
		if(inputCurrentText) {
			props.addTask(new Task(inputCurrentText, Date.now(), priority))
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
			<form className={s.main_form} onSubmit={addTask} action="POST">
				<Input onChange={changeTextOnInput} value={inputCurrentText} variant="large" type="text"/>
				<div className={s.btn_group}>
					<div className={s.select_priority}>
						<Button onClick={toggleSelectPriorityOnClick} data-priority={priority} variant={"switcher"} type="button">Priority</Button>
						{
							selectPriority ?
							<SelectPriority priority={priority} changePriority={changePriority}/>:null
						}
					</div>
					<Button variant="primary" type="submit">ADD</Button>
				</div>
			</form>
		</>
	)
}