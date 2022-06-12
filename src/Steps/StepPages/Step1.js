import { useState } from 'react';
import '../index.css';
import './Step1.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../components/layout/navigation/index';

const Step1 = () => {
  const alertMessage = 'Blank is now allowed.';
  const nextPage = '/step/2';
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
      <NavigationButtons
        stepNumber={1}
        nextCheck={userInput}
        alertMessage={alertMessage}
        nextPage={nextPage}
      />
    </main>
  );
};

export default Step1;
