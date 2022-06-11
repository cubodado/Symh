import './NavigationButtons.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = (props) => {
  let navigate = useNavigate();

  const step1NextEventHandler = () => {
    const alertMessage = 'Blank is now allowed.';
    if (props.nextCheck.length === 0) {
      alert(alertMessage);
    } else {
      navigate('/step/2');
    }
  };

  const step2NextEventHandler = () => {
    const alertMessage =
      'You can go to the next step if you select a heart shape.';
    if (props.nextCheck.length === 0) {
      alert(alertMessage);
    } else {
      navigate('/step/3');
    }
  };

  const step3NextEventHandler = () => {
    const alertMessage =
      'You can go to the next step if you select a heart animation.';
    if (props.nextCheck.length === 0) {
      alert(alertMessage);
    } else {
      console.log('NOT YET');
    }
  };

  const nextEventHandler = () => {
    if (props.stepNumber === 1) step1NextEventHandler();
    if (props.stepNumber === 2) step2NextEventHandler();
    if (props.stepNumber === 3) step3NextEventHandler();
  };

  const previousEventHandler = () => {
    if (props.stepNumber === 1) return alert('This is the first page.');
    if (props.stepNumber === 2) return navigate('/step/1');
    if (props.stepNumber === 3) return navigate('/step/2');
  };

  return (
    <div className="buttons">
      <button onClick={previousEventHandler}>
        <GrPrevious className="icons" />
      </button>
      <button onClick={nextEventHandler}>
        <GrNext className="icons" />
      </button>
    </div>
  );
};

export default NavigationButtons;
