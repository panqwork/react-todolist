import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Tab} from '../../atoms/index.js';
import s from './style.module.scss';

const TabsComponent = (props) => {
  let activeTab = (props.location.pathname).substring(1) || props.items[0];

  const items = props.items.map((item, index) => <Tab className={(activeTab === item.toLowerCase())?"active":null} key={index} tabName={item}/>)
  return(
    <div className={s.tabs}>
      {items}
    </div>
  )
}

export const Tabs = withRouter(TabsComponent)