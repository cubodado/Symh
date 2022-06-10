import './Step.css';
import NavigationButtons from './StepUI/NavigationButtons';

const Step = () => {
  return (
    <main className="step-div">
      <h2 className="step-text">Step 1</h2>
      <h1 className="step-info-text">Write down your short letter.</h1>
      <input className="user-input"></input>
      <NavigationButtons />
    </main>
  );
};

export default Step;
