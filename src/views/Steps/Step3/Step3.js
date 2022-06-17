import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeartAnimation } from '../../../store/step/stepsSlice';
import '../index.css';
import './Step3.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../../components/layout/navigation/index';
import { SelectBox } from '../../../components/forms/index';
import { heartAnimations } from '../../../utils/constants/heartAnimations';

const Step3 = () => {
  const alertMessage =
    'You can go to the next step if you select a heart animation.';
  const nextPage = '/step/4';
  const infoText = 'Select your heart animation.';
  const steps = useSelector((state) => state.steps);
  const [heartAnimation, setHeartAnimation] = useState(steps[2].heartAnimation);
  const [check, setCheck] = useState(steps[2].check);
  const dispatch = useDispatch();

  const updateStore = () => {
    dispatch(
      changeHeartAnimation({
        heartAnimation: heartAnimation,
        check: check,
      })
    );
  };

  const toggleHeartAnimation = (currentTarget) => {
    currentTarget.classList.toggle('active');

    if (heartAnimation === '') {
      setHeartAnimation(currentTarget.id);
      setCheck(true);
    } else {
      setHeartAnimation('');
      setCheck(false);
    }
  };

  const heartAnimationClickHandler = (event) => {
    if (check && event.currentTarget.id !== heartAnimation) {
      alert('You can select only one animation.');
    } else {
      toggleHeartAnimation(event.currentTarget);
    }
  };

  return (
    <main className="step-div">
      <StepInformation stepNumber={3} stepInfoText={infoText} />
      <div className="select-box">
        {heartAnimations.map((animation) => {
          return (
            <SelectBox
              key={animation.id}
              number={animation.number}
              class={animation.class}
              onClick={heartAnimationClickHandler}
              content={animation.content}
            />
          );
        })}
      </div>
      <NavigationButtons
        stepNumber={3}
        nextCheck={heartAnimation}
        alertMessage={alertMessage}
        nextPage={nextPage}
        updateStore={updateStore}
      />
    </main>
  );
};

export default Step3;
