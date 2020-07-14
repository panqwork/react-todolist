import React, {useState} from 'react';

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

  const addTask = (task) => {
    setList({...list, tasks: [...list.tasks, task], count: list.count+1});
  }

  const removeTask = (id) => {
    let newList = list.tasks.filter(item => (item.id !== id) ? item : false);
    setList({tasks:[...newList], count: list.count})
  }
  const completeTask = (id) => {
    let newList = list.tasks.map(item => {
      if(item.id === id){
        item.completed = 1
      }
      return item
    })
    setList({tasks:[...newList], count: list.count})
  }
  const editTask = (id, data) => {
    let newList = list.tasks.map(item => {
      if(item.id === id){
        item.taskName = data
      }
      return item
    })
    setList({tasks:[...newList], count: list.count})
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
