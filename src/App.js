import React, {useState} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import {TaskCreator} from './resources/components/task_creator/task_creator.jsx'
import {TaskList} from './resources/components/task_list/task_list.jsx';
import {TaskTabs} from './resources/components/task_tabs/task_tabs.jsx';

function App() {
  const [list, setList] = useState([])

  const addTask = (task) => {
    setList([...list, {...task, id: '#' + Math.random().toString(36).substr(2, 9)}]);
  }
  const removeTask = (id) => {
    
  }
  console.log(list)
  return (
    <Router>
      <div className="App">
        ToDoListApp
        <TaskCreator addTask={addTask}/>
        <TaskTabs/>
        <Route exact path={'/'}>
          <TaskList removeTask={removeTask} list={list}/>
        </Route>
        
      </div>
    </Router>
  );
}

export default App;
