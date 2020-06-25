import React, {useState} from 'react';

export const TaskCreator = (props) => {
	class Task {
		constructor(taskName) {
			this.taskName = taskName
		}
	}

	const [inputCurrentText, setInputCurrentText] = useState('');

	const addTask = (e) => {
		e.preventDefault()
		props.addTask(new Task(inputCurrentText))
		setInputCurrentText('')
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