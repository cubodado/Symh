import './StepInformation.css';

const StepInformation = (props) => {
  return (
    <div className="step-text-div">
      <h2 className="step-text">Step {props.stepNumber}</h2>
      <h1 className="step-info-text">{props.stepInfoText}</h1>
    </div>
  );
};

export default StepInformation;
