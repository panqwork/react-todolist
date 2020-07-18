import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import {TaskCreator} from './resources/components/task_creator/task_creator.jsx'
import {TaskList} from './resources/components/task_list/task_list.jsx';
import {TaskTabs} from './resources/components/task_tabs/task_tabs.jsx';
import { ListTitle } from './resources/components/list_title/list_title.jsx';


function App() {

  
  const [list, setList] = useState([{taskName: 'Ваша первая карточка', id: 1, priority: 0, completed: 0}]);

  useEffect(()=>{
    if(localStorage.getItem('tasks')){
      setList(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(list))
  }, [list])

  const addTask = (task) => {
    setList([task, ...list]);
  }

  const removeTask = (id) => {
    const updatedTasks = list.filter(item => (item.id !== id) ? item : false);
    setList([...updatedTasks]);
  }
  const completeTask = (id) => {
    const updatedTasks = list.map(item => {
      if(item.id === id){
        item.completed = 1
      }
      return item
    })
    setList([...updatedTasks])
  }
  const editTask = (id, data) => {
    const updatedTasks = list.map(item => {
      if(item.id === id){
        item.taskName = data
      }
      return item
    })
    setList([...updatedTasks]);
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
