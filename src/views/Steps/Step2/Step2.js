import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeartColor } from '../../../store/step/stepsSlice';
import '../index.css';
import './Step2.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../../components/layout/navigation/index';
import { SelectBox } from '../../../components/forms/index';
import { heartColors } from '../../../utils/constants/heartColors';

const Step2 = () => {
  const alertMessage =
    'You can go to the next step if you select a heart color.';
  const nextPage = '/step/3';
  const steps = useSelector((state) => state.steps);
  const [heartColor, setHeartColor] = useState(steps[1].heartColor);
  const [check, setCheck] = useState(steps[1].check);
  const infoText = 'Select your heart color.';
  const dispatch = useDispatch();

  const updateStore = () => {
    dispatch(
      changeHeartColor({
        heartColor: heartColor,
        check: check,
      })
    );
  };

  const toggleHeartColor = (currentTarget) => {
    currentTarget.classList.toggle('active');

    if (heartColor === '') {
      setHeartColor(currentTarget.id);
      setCheck(true);
    } else {
      setHeartColor('');
      setCheck(false);
    }
  };

  const heartColorClickHandler = (event) => {
    if (check && event.currentTarget.id !== heartColor) {
      alert('You can select only one color.');
    } else {
      toggleHeartColor(event.currentTarget);
    }
  };

  return (
    <main className="step-div">
      <StepInformation stepNumber={2} stepInfoText={infoText} />
      <div className="select-box">
        {heartColors.map((color) => {
          return (
            <SelectBox
              key={color.id}
              number={color.colorNumber}
              class={color.colorClass}
              onClick={heartColorClickHandler}
              content={color.colorContent}
            />
          );
        })}
      </div>
      <NavigationButtons
        stepNumber={2}
        nextCheck={heartColor}
        alertMessage={alertMessage}
        nextPage={nextPage}
        updateStore={updateStore}
      />
    </main>
  );
};

export default Step2;
