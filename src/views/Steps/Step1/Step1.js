import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const lengthAlertMessage = 'Maximum is 14 characters.';
  const nextPage = '/step/2';
  const infoText = 'Write down your short letter.';
  const dispatch = useDispatch();
  const userInputRef = useRef();
  const steps = useSelector((state) => state.steps);
  let [userInput, setUserInput] = useState(steps[0].inputText);

  const updateStore = () => {
    dispatch(
      changeInputText({
        inputText: userInput.trim(),
      })
    );
  };

  const changeEventHandler = () => {
    if (14 < userInputRef.current.value.length) {
      alert(lengthAlertMessage);
    } else {
      setUserInput(userInputRef.current.value);
    }
  };

  return (
    <main className="step-div">
      <StepInformation stepNumber={1} stepInfoText={infoText} />
      <TextInput
        onChange={changeEventHandler}
        userInputRef={userInputRef}
        userInput={userInput}
      />
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
