import React, { useState, useEffect } from 'react';
import {TodoComponent} from '../components/todo.jsx';
import {Context} from '../../context.js';

export const Todo = () => {
  const [list, setList] = useState([]);

  const addTask = (taskName, priority) => {
    setList([{
      taskName:taskName,
      priority:priority,
      completed: 0,
      id: Date.now()
    }, ...list]);
  }
  const removeTask = id => {
    const updatedTasks = list.filter(item => (item.id !== id) ? item : false);
    setList([...updatedTasks]);
  }
  const completeTask = id => {
    const updatedTasks = list.map(item => {
      if(item.id === id){
        item.completed = 1
      }
      return item
    })
    setList([...updatedTasks])
  }
  const renameTask = (data, id) => {
    const updatedTasks = list.map(item => {
      if(item.id === id){
        item.taskName = data
      }
      return item
    })
    setList([...updatedTasks]);
  }

  useEffect(()=>{
    const localTasks = JSON.parse(localStorage.getItem('list')) || []
    setList(localTasks);
  }, []);
  useEffect(()=>{
    if(list.length) {
      localStorage.setItem('list', JSON.stringify(list));
    }
  }, [list]);
  
  return(
    <Context.Provider value={{
      addTask, removeTask, completeTask, renameTask, list
    }}>
      <TodoComponent/>
    </Context.Provider>
  ) 
}