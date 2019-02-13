import React from 'react';
import './Button.scss';


const ActionButton = props => {
    return(
        <button className={props.buttonStyle}><i className={props.fontAwsome}></i></button>
    );
  };
  
  export default ActionButton;