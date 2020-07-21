import React, {useContext} from 'react';
import {Task} from '../../../../../ui/organisms/index.js';
import {Context} from '../../../../context.js';
import {withRouter} from 'react-router-dom';

const TaskListComponent = (props) => {
  const {list} = useContext(Context);
  let taskList = [];
	switch (props.location.pathname.toLowerCase()) {
		case '/active':
			taskList = list.filter(item => {
				return !item.completed ? item:null
			})
			break;
		case '/completed':
			taskList = list.filter(item => {
				return item.completed ? item:null
			})
			break
		default:
			taskList = list
			break;
  }
  
  // sort by priority
	taskList.sort((a,b)=>(b.priority - a.priority));

	// sort by completed
	taskList.sort((a,b)=>(a.completed - b.completed));
  
  return(
    <div className="task_list">
      {taskList.map(item => <Task taskName={item.taskName} 
                              priority={item.priority}
                              completed={item.completed}
                              id={item.id}
                              key={item.id}
                        />)}
    </div>
  )
}

export const TaskList = withRouter(TaskListComponent)