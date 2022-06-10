import '../index.css';
import './Step1.css';
import NavigationButtons from '../StepUI/NavigationButtons';
import StepInformation from '../StepUI/StepInformation';
import { useState } from 'react';

const Step1 = () => {
  let [userInput, setUserInput] = useState('');

  const changeEventHandler = () => {
    const userInputText = document.querySelector('.user-input');
    setUserInput(userInputText.value);
  };

  return (
    <main className="step-div">
      <StepInformation
        stepNumber={1}
        stepInfoText={'Write down your short letter.'}
      />
      <input onChange={changeEventHandler} className="user-input"></input>
      <NavigationButtons />
    </main>
  );
};

export default Step1;
