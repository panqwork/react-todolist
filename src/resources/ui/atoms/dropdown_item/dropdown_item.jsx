import React from 'react';
import s from './style.module.scss';

export const DropdownItem = ({dropname, callback, index, ...props}) => {
  return(
    <div className={[s.dropdown_item, s[props.className]].join(' ')} onClick={()=>{callback(index, dropname)}}>
      {dropname}
    </div>
  )
}