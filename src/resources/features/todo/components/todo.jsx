import React from 'react';
import {Header, Tabs} from '../../../ui/molecules/index.js';
import {FormCreate} from '../../../ui/organisms/index.js';
import {TaskList} from '../features/task_list/index.js';
import s from './style.module.scss';


export const TodoComponent = () => {
  return(
    <div className={[s.todo]}>
      <Header/>
      <FormCreate/>
      <Tabs items={['All','Active','Completed']}/>
      <TaskList/>
    </div>
  )
}