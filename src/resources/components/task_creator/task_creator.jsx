import React, {useState} from 'react';

export const TaskCreator = (props) => {
	class Task {
		constructor(taskName, id) {
			this.taskName = taskName;
			this.id = id;
			this.completed = false;
		}
	}

	const [inputCurrentText, setInputCurrentText] = useState('');

	const addTask = (e) => {
		e.preventDefault();
		if(inputCurrentText) {
			const id = '#' + Math.random().toString(36).substr(2, 9)
			props.addTask(new Task(inputCurrentText, id))
			setInputCurrentText('')
		}
		
	}

	const changeText = (e) => {
		setInputCurrentText(e.target.value);
	}
	return(
		<>
			<form onSubmit={addTask} action="POST">
				<input onChange={changeText} value={inputCurrentText} type="text"/>
				<div className="btn-group">
					<button>ADD</button>
				</div>
			</form>
		</>
	)
}