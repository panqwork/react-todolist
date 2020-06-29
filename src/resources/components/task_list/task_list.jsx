import React from 'react';

import {Task} from './task/task.jsx';

import s from './style.module.scss';
import { withRouter } from 'react-router-dom';

const TaskListComponent = (props) => {
	let taskList = [];

	switch (props.location.pathname.toLowerCase()) {
		case '/active':
			taskList = props.tasks.filter(item => {
				if(!item.completed){
					return item
				}
			})
			break;
		case '/completed':
			taskList = props.tasks.filter(item => {
				if(item.completed){
					return item
				}
			})
			break
		default:
			taskList = props.tasks
			break;
	}

	// sort by priority
	taskList.sort((a,b)=>(b.priority - a.priority))

	taskList = taskList.map((item, index) => <Task completeTask={props.completeTask} removeTask={props.removeTask} key={index} data={item} editTask={props.editTask}/>)

	
	return(
		<div className={s.task_list}>
			{taskList}
		</div>
	)
}

export const TaskList = withRouter(TaskListComponent)