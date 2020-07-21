import React, { useState, useContext } from 'react';
import s from './style.module.scss';
import {Button, Input} from '../../atoms/index.js';
import {Check, Bin, Edit} from '../../atoms/index.js';
import {Context} from '../../../features/context.js';

export const Task = ({taskName, priority, completed, id}) => {
  const [editMode, setEditMode] = useState(false);
  const [inputText, setInputText] = useState(taskName);
  const cname = completed ? 'completed' : null;
  const {removeTask, renameTask, completeTask} = useContext(Context);
  return(
    <div data-priority={priority} className={[s.task, s[cname]].join(' ')}>
      {
        editMode ? 
        <div className={[s.edit].join(' ')}>
          <Input autoFocus onChange={(e)=>{setInputText(e.target.value)}} value={inputText} type='text' variant='normal'/>

          <Button onClick={()=>{
            setEditMode(false);
            renameTask(inputText, id);
          }} variant='normal'>save</Button>

          <Button onClick={()=>{
            setEditMode(false);
            setInputText(taskName);
          }} variant='normal'>cancel</Button>
        </div>
        :
        <>
          <Button disabled={completed} onClick={()=>{
            completeTask(id)
          }} variant='transparent'>
            <Check/>
          </Button>

          <p>{taskName}</p>

          <div className={s.btn_group}>

            <Button onClick={()=>{
              removeTask(id);
            }} variant='transparent'>
              <Bin/>
            </Button>

            <Button onClick={()=>{
              setEditMode(true);
            }} variant='transparent'>
              <Edit/>
            </Button>

          </div> 
        </>
      }
      
    </div>
  )
}