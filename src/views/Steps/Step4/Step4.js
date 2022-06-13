import '../index.css';
import './Step4.css';
import {
  NavigationButtons,
  StepInformation,
} from '../../../components/layout/navigation/index';
import { useSelector } from 'react-redux';

const Step4 = () => {
  const alertMessage = 'Just wait for a second.';
  const infoText = 'Alomost done.';
  const steps = useSelector((state) => state.steps);
  console.log(steps);

  return (
    <div className="step-div">
      <StepInformation stepNumber={4} stepInfoText={infoText} />
      <NavigationButtons
        stepNumber={4}
        nextCheck={''}
        alertMessage={alertMessage}
        nextPage={''}
        updateStore={null}
      />
    </div>
  );
};

export default Step4;
