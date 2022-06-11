import '../index.css';
import './Step2.css';
import StepInformation from '../StepUI/StepInformation';
import NavigationButtons from '../StepUI/NavigationButtons';
import { useState } from 'react';

const Step2 = () => {
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
      <div className="heart-shapes">
        <div
          id="shape1"
          className="heart-shape"
          onClick={heartShapeClickHandler}
        >
          <h2>💖</h2>
        </div>
        <div
          id="shape2"
          className="heart-shape"
          onClick={heartShapeClickHandler}
        >
          <h2>💕</h2>
        </div>
        <div
          id="shape3"
          className="heart-shape"
          onClick={heartShapeClickHandler}
        >
          <h2>💝</h2>
        </div>
        <div
          id="shape4"
          className="heart-shape"
          onClick={heartShapeClickHandler}
        >
          <h2>💘</h2>
        </div>
      </div>
      <NavigationButtons stepNumber={2} nextCheck={heartShape} />
    </main>
  );
};

export default Step2;
