import React, { useState, useContext } from 'react';
import {Button, Input} from '../../atoms/index.js';
import {Dropdown} from '../../molecules/'
import s from './style.module.scss';
import {Context} from '../../../features/context.js';

export const FormCreate = (props) => {
  const [inputText, setInputText] = useState('');
  const [priority, setPriority] = useState(0);
  const {addTask} = useContext(Context);

  const onSubmitForm = (e) => {
    e.preventDefault();
    addTask(inputText, priority);
    setInputText('');
    setPriority(0);
  }

  return(
    <form onSubmit={onSubmitForm} className={s.form_create} action="POST">

      <Input onChange={(e)=>{
        setInputText(e.target.value)
      }} value={inputText} variant="large" type="text"/>

      <div className={s.btn_group}>

        <Dropdown priority={priority} options={['None', 'Easy', 'Middle', 'Hard']} callback={(index)=>{
          setPriority(index)
        }}>
          <Button type="button" variant="switcher">Priority</Button>
        </Dropdown>

        <Button type="submit" variant="primary">ADD</Button>
      </div>
    </form>
  )
}