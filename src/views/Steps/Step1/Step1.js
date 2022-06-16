import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeInputText } from '../../../store/step/stepsSlice';
import '../index';
import './Step1.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../../components/layout/navigation/index';
import { TextInput } from '../../../components/forms/index';

const Step1 = () => {
  const alertMessage = 'Blank is now allowed.';
  const nextPage = '/step/2';
  const infoText = 'Write down your short letter.';
  const dispatch = useDispatch();
  let [userInput, setUserInput] = useState('');

  const updateStore = () => {
    dispatch(
      changeInputText({
        inputText: userInput.trim(),
      })
    );
  };

  const changeEventHandler = () => {
    const userInputText = document.querySelector('.user-input');
    setUserInput(userInputText.value);
  };

  return (
    <main className="step-div">
      <StepInformation stepNumber={1} stepInfoText={infoText} />
      <TextInput onChange={changeEventHandler} />
      <NavigationButtons
        stepNumber={1}
        nextCheck={userInput}
        alertMessage={alertMessage}
        nextPage={nextPage}
        updateStore={updateStore}
      />
    </main>
  );
};

export default Step1;
