import '../index.css';
import {
  StepInformation,
  ResetSaveButtons,
} from '../../../components/layout/navigation';

const Step5 = () => {
  const infoText = 'Here is your card.';

  return (
    <main className="step-div">
      <StepInformation stepNumber={'Clear ✨'} stepInfoText={infoText} />
      <ResetSaveButtons />
    </main>
  );
};

export default Step5;
