import './StepInformation.css';

const StepInformation = (props) => {
  const stepText = props.stepNumber === 'Clear ✨' ? 'Steps' : 'Step';

  return (
    <div className="step-text-div">
      <h2 className="step-text">
        {stepText} {props.stepNumber}
      </h2>
      <h1 className="step-info-text">{props.stepInfoText}</h1>
    </div>
  );
};

export default StepInformation;
