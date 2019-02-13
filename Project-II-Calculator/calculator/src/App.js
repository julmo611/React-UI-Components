import React from 'react';
import './App.scss';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calc-container">
      <div className="display">
      <CalculatorDisplay display={0}/>
      </div>
      <div className="numbers">
        <div className="big-buttons">
         <NumberButton text={'clear'} />
        </div>
        <NumberButton buttonStyle="numberbtn" text={7} />
        <NumberButton buttonStyle="numberbtn" text={8} />
        <NumberButton buttonStyle="numberbtn" text={9} />
        <NumberButton buttonStyle="numberbtn" text={4} />
        <NumberButton buttonStyle="numberbtn" text={5} />
        <NumberButton buttonStyle="numberbtn" text={6} />
        <NumberButton buttonStyle="numberbtn" text={1} />
        <NumberButton buttonStyle="numberbtn" text={2} />
        <NumberButton buttonStyle="numberbtn" text={3} />
        <div className="big-buttons">
        <NumberButton buttonStyle="numberbtn" text={0} />
        </div>
      </div>
      <div className="action-btns">
        <ActionButton buttonStyle="actionbtn" fontAwsome={"fas fa-divide"} />
        <ActionButton buttonStyle="actionbtn" fontAwsome={"fas fa-times"} />
        <ActionButton buttonStyle="actionbtn" fontAwsome={"fas fa-minus"} />
        <ActionButton buttonStyle="actionbtn" fontAwsome={"fas fa-plus"} />
        <ActionButton buttonStyle="actionbtn" fontAwsome={"fas fa-equals"} />
      </div>
      
    </div>
  );
};

export default App;
