import React from 'react';

import {Task} from './task/task.jsx'

export const TaskList = (props) => {

	const tasks = props.list.map((item, index) => <Task removeTask={props.removeTask} key={index} data={item}/>)
	return(
		<>
			{tasks}
		</>
	)
}