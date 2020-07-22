import React from 'react';

import {Link} from 'react-router-dom';
import s from './style.module.scss';

export const Tab = ({tabName, className}) => {
  const path = `/react-todolist/${tabName.toLowerCase()}`;
  return(
    <Link className={[s.tab, s[className]].join(' ')} to={path}>{tabName}</Link>
  )
}