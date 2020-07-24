import React from 'react';
import {Logo} from '../../atoms/index.js';
import s from './style.module.scss';

export const Header = () => {
  return(
    <div className={s.header}>
      <Logo/>
      <h1>React To-Do App</h1>
    </div>
  )
}