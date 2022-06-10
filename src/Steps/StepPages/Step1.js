import '../index.css';
import './Step1.css';
import NavigationButtons from '../StepUI/NavigationButtons';
import StepInformation from '../StepUI/StepInformation';
import { useState } from 'react';

const Step1 = () => {
  const infoText = 'Write down your short letter.';
  let [userInput, setUserInput] = useState('');

  const changeEventHandler = () => {
    const userInputText = document.querySelector('.user-input');
    setUserInput(userInputText.value);
  };

  return (
    <main className="step-div">
      <StepInformation stepNumber={1} stepInfoText={infoText} />
      <input onChange={changeEventHandler} className="user-input"></input>
      <NavigationButtons stepNumber={1} nextCheck={userInput} />
    </main>
  );
};

export default Step1;
