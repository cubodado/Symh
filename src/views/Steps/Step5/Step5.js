import '../index.css';
import {
  StepInformation,
  ResetSaveButtons,
} from '../../../components/layout/navigation';
import { Card } from '../../3D/index';

const Step5 = () => {
  const infoText = 'Here is your card.';

  return (
    <main className="step-div">
      <StepInformation stepNumber={'Clear ✨'} stepInfoText={infoText} />
      <Card />
      <ResetSaveButtons />
    </main>
  );
};

export default Step5;
