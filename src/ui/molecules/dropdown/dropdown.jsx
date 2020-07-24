import React, { useState } from 'react';
import {DropdownItem} from '../../atoms';
import s from './style.module.scss';

export const Dropdown = (props) => {
  const [active, setActive] = useState(false);

  const onSelectEvent = (index, dropname) => {
    props.callback(index, dropname);
    setActive(false);
  }

  const items = props.options.map((item, index)=> {
    const cname = (props.priority===index)? 'active':null
    return <DropdownItem className={cname} index={index} key={index} callback={onSelectEvent} dropname={item}/>
  });

  return(
    <div>
      <div onClick={()=>{setActive(!active)}}>

        {props.children}

      </div>

      {active?
        <ul className={s.dropdown}>
          {items}
        </ul>
      :null}
    </div>
  )
}
