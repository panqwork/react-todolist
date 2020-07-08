import React, {useState} from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import {TaskCreator} from './resources/components/task_creator/task_creator.jsx'
import {TaskList} from './resources/components/task_list/task_list.jsx';
import {TaskTabs} from './resources/components/task_tabs/task_tabs.jsx';
import { ListTitle } from './resources/components/list_title/list_title.jsx';


function App() {

  
  const [list, setList] = useState([]);

  const addTask = (task) => {
    setList([...list, {...task}]);
  }

  const removeTask = (id) => {
    let newList = list.filter(item => (item.id !== id) ? item : false);
    if(newList){
      setList(newList)
    }
  }
  const completeTask = (id) => {
    let newList = list.map(item => {
      if(item.id === id){
        item.completed = 1
      }
      return item
    })
    setList(newList)
  }
  const editTask = (id, data) => {
    let newList = list.map(item => {
      if(item.id === id){
        item.taskName = data
      }
      return item
    })
    setList(newList)
  }
  return (
    <Router>
      <div className="App">
        <ListTitle/>
        <TaskCreator addTask={addTask}/>

        <TaskTabs/>

        <TaskList editTask={editTask} completeTask={completeTask} removeTask={removeTask} tasks={list}/>
        
      </div>
    </Router>
  );
}

export default App;
