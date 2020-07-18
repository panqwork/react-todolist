import React from 'react';
import s from './style.module.scss';

export const Input = ({variant, ...props}) => {
  const cname = 'inp-'+variant;
  return(
    <input className={[s[cname], s.inp].join(' ')} {...props}/>
  )
}