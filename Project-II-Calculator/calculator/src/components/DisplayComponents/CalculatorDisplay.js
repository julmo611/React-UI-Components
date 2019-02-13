import React from 'react';
import './Display.scss';


const CalculatorDisplay = props => {
    return(
        <div className={props.display}>{props.display}</div>
    );
  };
  
  export default CalculatorDisplay;