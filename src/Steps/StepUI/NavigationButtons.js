import './NavigationButtons.css';
import { GrPrevious, GrNext } from 'react-icons/gr';

const NavigationButtons = (props) => {
  const alertMessage = 'Blank is now allowed.';

  const step1NextEventHandler = () => {
    if (props.nextCheck.length === 0) {
      alert(alertMessage);
    } else {
      alert(props.nextCheck);
    }
  };

  const nextEventHandler = () => {
    if (props.stepNumber === 1) step1NextEventHandler();
  };

  return (
    <div className="buttons">
      <button>
        <GrPrevious className="icons" />
      </button>
      <button onClick={nextEventHandler}>
        <GrNext className="icons" />
      </button>
    </div>
  );
};

export default NavigationButtons;
