import React from 'react';

import {Task} from './task/task.jsx';

import s from './style.module.scss';

export const TaskList = (props) => {
	let tasks = []

	switch (props.taskType) {
		case 'active':
			tasks = props.tasks.filter(item => {
				if(!item.completed){
					return item
				}
			})
			break;
		case 'completed':
			tasks = props.tasks.filter(item => {
				if(item.completed){
					return item
				}
			})
			break
		default:
			tasks = props.tasks
			break;
	}
	const taskList = tasks.map((item, index) => <Task completeTask={props.completeTask} removeTask={props.removeTask} key={index} data={item}/>)
	return(
		<div className={s.task_list}>
			{taskList}
		</div>
	)
}