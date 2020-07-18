import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import {TaskCreator} from './resources/components/task_creator/task_creator.jsx'
import {TaskList} from './resources/components/task_list/task_list.jsx';
import {TaskTabs} from './resources/components/task_tabs/task_tabs.jsx';
import { ListTitle } from './resources/components/list_title/list_title.jsx';


function App() {

  
  const [list, setList] = useState({
    tasks: [],
    count: 0
  });

  useEffect(()=>{
    if(localStorage.getItem('tasks')){
      console.log('Local storage activated!');
      setList(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  const addTask = (task) => {
    const newList = {...list, tasks: [task,...list.tasks], count: list.count+1};
    setList(newList);
    localStorage.setItem('tasks', JSON.stringify(newList));
  }

  const removeTask = (id) => {
    const updatedTasks = list.tasks.filter(item => (item.id !== id) ? item : false);
    const newList = {tasks:[...updatedTasks], count: list.count}
    setList(newList)
    localStorage.setItem('tasks', JSON.stringify(newList));
  }
  const completeTask = (id) => {
    const updatedTasks = list.tasks.map(item => {
      if(item.id === id){
        item.completed = 1
      }
      return item
    })
    const newList = {tasks:[...updatedTasks], count: list.count}
    setList(newList)
    localStorage.setItem('tasks', JSON.stringify(newList));
  }
  const editTask = (id, data) => {
    const updatedTasks = list.tasks.map(item => {
      if(item.id === id){
        item.taskName = data
      }
      return item
    })
    const newList = {tasks:[...updatedTasks], count: list.count}
    setList(newList);
    localStorage.setItem('tasks', JSON.stringify(newList));
  }
  return (
    <Router>
      <div className="App">
        <ListTitle/>
        <TaskCreator count={list.count} addTask={addTask}/>

        <TaskTabs/>

        <TaskList editTask={editTask} completeTask={completeTask} removeTask={removeTask} tasks={list.tasks}/>
        
      </div>
    </Router>
  );
}

export default App;
