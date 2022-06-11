import '../index.css';
import './Step3.css';
import StepInformation from '../StepUI/StepInformation';
import SelectBox from '../StepUI/SelectBox';
import NavigationButtons from '../StepUI/NavigationButtons';

const Step3 = () => {
  const infoText = 'Select your heart animation.';
  let heartAnimation = '';

  return (
    <main className="step-div">
      <StepInformation stepNumber={3} stepInfoText={infoText} />
      <SelectBox />
      <NavigationButtons stepNumber={3} nextCheck={heartAnimation} />
    </main>
  );
};

export default Step3;
