import React from 'react';
import ReactLogo from '../../assets/icons/react-logo.svg';
import s from './style.module.scss';

export const ListTitle = () => {
  return(
    <div className={s.list_title}>
      <img src={ReactLogo} alt="React-logo"/>
      <h1>React To-Do App</h1>
    </div>
  )
}