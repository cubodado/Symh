import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeHeartShape } from '../../../store/step/stepsSlice';
import '../index.css';
import './Step2.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../../components/layout/navigation/index';
import { SelectBox } from '../../../components/forms/index';

const Step2 = () => {
  const alertMessage =
    'You can go to the next step if you select a heart shape.';
  const nextPage = '/step/3';
  const heartShapes = [
    {
      id: 1,
      shapeNumber: 'shape1',
      shapeClass: 'heart-shape',
      shapeContent: '💖',
    },
    {
      id: 2,
      shapeNumber: 'shape2',
      shapeClass: 'heart-shape',
      shapeContent: '💕',
    },
    {
      id: 3,
      shapeNumber: 'shape3',
      shapeClass: 'heart-shape',
      shapeContent: '💝',
    },
    {
      id: 4,
      shapeNumber: 'shape4',
      shapeClass: 'heart-shape',
      shapeContent: '💘',
    },
  ];
  const [heartShape, setHeartShape] = useState('');
  const [check, setCheck] = useState(false);
  const infoText = 'Select your heart shape.';
  const dispatch = useDispatch();

  const toggleHeartShape = (currentTarget) => {
    currentTarget.classList.toggle('active');

    if (heartShape === '') {
      setHeartShape(currentTarget.id);
      setCheck(true);

      dispatch(
        changeHeartShape({
          heartShape: heartShape,
          check: check,
        })
      );
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
      />
    </main>
  );
};

export default Step2;
