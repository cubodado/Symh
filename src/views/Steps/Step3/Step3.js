import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeHeartAnimation } from '../../../store/step/stepsSlice';
import '../index.css';
import './Step3.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../../components/layout/navigation/index';
import { SelectBox } from '../../../components/forms/index';

const Step3 = () => {
  const alertMessage =
    'You can go to the next step if you select a heart animation.';
  const nextPage = '/step/4';
  const infoText = 'Select your heart animation.';
  const heartAnimations = [
    {
      id: 1,
      number: 'animation1',
      class: 'heart-animation',
      content: '✌🏻',
    },
    {
      id: 2,
      number: 'animation2',
      class: 'heart-animation',
      content: '👋🏻',
    },
    {
      id: 3,
      number: 'animation3',
      class: 'heart-animation',
      content: '👏🏻',
    },
    {
      id: 4,
      number: 'animation4',
      class: 'heart-animation',
      content: '🙌🏻',
    },
  ];
  const [heartAnimation, setHeartAnimation] = useState('');
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const toggleHeartAnimation = (currentTarget) => {
    currentTarget.classList.toggle('active');

    if (heartAnimation === '') {
      setHeartAnimation(currentTarget.id);
      setCheck(true);

      dispatch(
        changeHeartAnimation({
          heartAnimation: heartAnimation,
          check: check,
        })
      );
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
      />
    </main>
  );
};

export default Step3;
