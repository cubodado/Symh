import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeartShape } from '../../../store/step/stepsSlice';
import '../index.css';
import './Step2.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../../components/layout/navigation/index';
import { SelectBox } from '../../../components/forms/index';
import { heartShapes } from '../../../utils/constants/heartShapes';

const Step2 = () => {
  const alertMessage =
    'You can go to the next step if you select a heart shape.';
  const nextPage = '/step/3';
  const steps = useSelector((state) => state.steps);
  const [heartShape, setHeartShape] = useState(steps[1].heartShape);
  const [check, setCheck] = useState(steps[1].check);
  const infoText = 'Select your heart shape.';
  const dispatch = useDispatch();

  const updateStore = () => {
    dispatch(
      changeHeartShape({
        heartShape: heartShape,
        check: check,
      })
    );
  };

  const toggleHeartShape = (currentTarget) => {
    currentTarget.classList.toggle('active');

    if (heartShape === '') {
      setHeartShape(currentTarget.id);
      setCheck(true);
    } else {
      setHeartShape('');
      setCheck(false);
    }
  };

  const heartShapeClickHandler = (event) => {
    if (check && event.currentTarget.id !== heartShape) {
      alert('You can select only one shape.');
    } else {
      toggleHeartShape(event.currentTarget);
    }
  };

  return (
    <main className="step-div">
      <StepInformation stepNumber={2} stepInfoText={infoText} />
      <div className="select-box">
        {heartShapes.map((shape) => {
          return (
            <SelectBox
              key={shape.id}
              number={shape.shapeNumber}
              class={shape.shapeClass}
              onClick={heartShapeClickHandler}
              content={shape.shapeContent}
            />
          );
        })}
      </div>
      <NavigationButtons
        stepNumber={2}
        nextCheck={heartShape}
        alertMessage={alertMessage}
        nextPage={nextPage}
        updateStore={updateStore}
      />
    </main>
  );
};

export default Step2;
