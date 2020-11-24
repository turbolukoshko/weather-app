import React from 'react';
import './Input.scss';

const Input = props => {
  return(
    <input 
      type="text" 
      className="input" 
      onChange={e => props.onChange(e)}
    />
  );
}

export default Input;
