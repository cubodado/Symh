import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeartSender } from '../../../store/step/stepsSlice';
import '../index.css';
import './Step3.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../../components/layout/navigation/index';
import { TextInput } from '../../../components/forms/index';

const Step3 = () => {
  const alertMessage =
    'You can go to the next step if you do not write down your name.';
  const lengthAlertMessage = 'Maximum is 10 characters.';
  const nextPage = '/result';
  const infoText = 'Write down your name.';
  const steps = useSelector((state) => state.steps);
  const [heartSender, setHeartSender] = useState(steps[2].heartSender);
  const dispatch = useDispatch();
  const userInputRef = useRef();

  const updateStore = () => {
    dispatch(
      changeHeartSender({
        heartSender: heartSender,
      })
    );
  };

  const changeEventHandler = () => {
    if (10 < userInputRef.current.value.length) {
      alert(lengthAlertMessage);
    } else {
      setHeartSender(userInputRef.current.value);
    }
  };

  return (
    <main className="step-div">
      <StepInformation stepNumber={3} stepInfoText={infoText} />
      <TextInput
        onChange={changeEventHandler}
        userInputRef={userInputRef}
        userInput={heartSender}
      />
      <NavigationButtons
        stepNumber={3}
        nextCheck={heartSender}
        alertMessage={alertMessage}
        nextPage={nextPage}
        updateStore={updateStore}
      />
    </main>
  );
};

export default Step3;
