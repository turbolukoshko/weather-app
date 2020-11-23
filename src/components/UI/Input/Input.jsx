import React from 'react';

const Input = props => {
  return(
    <input 
      type="text" 
      className="input" 
      onChange={props.onChange}
    />
  );
}

export default Input;
