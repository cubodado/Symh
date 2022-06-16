import '../index.css';
import { StepInformation } from '../../../components/layout/navigation';

const Step5 = () => {
  const infoText = 'Here is your card.';

  return (
    <main className="step-div">
      <StepInformation stepNumber={'Clear ✨'} stepInfoText={infoText} />
    </main>
  );
};

export default Step5;
