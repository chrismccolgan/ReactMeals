import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        /* 
          Ensures all the key value pairs in the props.input 
          object are added as props to input 
        */
        {...props.input}
      />
    </div>
  );
};

export default Input;
