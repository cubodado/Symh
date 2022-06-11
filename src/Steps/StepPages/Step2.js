import '../index.css';
import './Step2.css';
import StepInformation from '../StepUI/StepInformation';
import NavigationButtons from '../StepUI/NavigationButtons';
import SelectBox from '../StepUI/SelectBox';
import { useState } from 'react';

const Step2 = () => {
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
              shapeNumber={shape.shapeNumber}
              shapeClass={shape.shapeClass}
              onClick={heartShapeClickHandler}
              shapeContent={shape.shapeContent}
            />
          );
        })}
      </div>
      <NavigationButtons stepNumber={2} nextCheck={heartShape} />
    </main>
  );
};

export default Step2;
