import React from 'react';

import {Task} from './task/task.jsx';

import s from './style.module.scss';
import { withRouter } from 'react-router-dom';

const TaskListComponent = (props) => {
	let tasks = []

	switch (props.location.pathname.toLowerCase()) {
		case '/active':
			tasks = props.tasks.filter(item => {
				if(!item.completed){
					return item
				}
			})
			break;
		case '/completed':
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
	const taskList = tasks.map((item, index) => <Task completeTask={props.completeTask} removeTask={props.removeTask} key={index} data={item} editTask={props.editTask}/>)
	return(
		<div className={s.task_list}>
			{taskList}
		</div>
	)
}

export const TaskList = withRouter(TaskListComponent)