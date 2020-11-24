import React from 'react';
import './Button.scss';

const Button = props => {
  return(
    <button 
      className="button"
      onClick={(e) => props.onClick(e)}
      >
        {props.title}    
    </button>
  );
}

export default Button;
