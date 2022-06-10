import './Step.css';
import NavigationButtons from './StepUI/NavigationButtons';
import StepInformation from './StepUI/StepInformation';

const Step = () => {
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

export default Step;
