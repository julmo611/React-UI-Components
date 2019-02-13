import React from 'react';
import './Button.scss';


const NumberButtons = props => {
    return(
        <button className={props.buttonStyle}>{props.text}</button>
    );
  };
  
  export default NumberButtons;
  