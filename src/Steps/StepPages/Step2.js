import '../index.css';
import './Step2.css';
import StepInformation from '../StepUI/StepInformation';
import NavigationButtons from '../StepUI/NavigationButtons';

const Step2 = () => {
  const infoText = 'Select your heart shape.';
  let heartShape = 1;

  return (
    <main className="step-div">
      <StepInformation stepNumber={2} stepInfoText={infoText} />
      <NavigationButtons stepNumber={2} nextCheck={heartShape} />
    </main>
  );
};

export default Step2;
