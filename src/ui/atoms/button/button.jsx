import React from 'react';
import s from './style.module.scss';

export const Button = ({variant, children, ...props}) => {
  let cname = 'btn-'+variant;
  
  return(
    <button {...props} className={[s[cname], s.btn].join(' ')}>
      {children}
    </button>
  )
}