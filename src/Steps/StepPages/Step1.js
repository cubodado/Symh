import '../index.css';
import './Step1.css';
import NavigationButtons from '../StepUI/NavigationButtons';
import StepInformation from '../StepUI/StepInformation';

const Step1 = () => {
  return (
    <main className="step-div">
      <StepInformation
        stepNumber={1}
        stepInfoText={'Write down your short letter.'}
      />
      <input className="user-input"></input>
      <NavigationButtons />
    </main>
  );
};

export default Step1;
