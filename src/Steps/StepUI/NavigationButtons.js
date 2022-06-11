import './NavigationButtons.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = (props) => {
  const alertMessage = 'Blank is now allowed.';
  let navigate = useNavigate();

  const step1NextEventHandler = () => {
    if (props.nextCheck.length === 0) {
      alert(alertMessage);
    } else {
      navigate('/step/2');
    }
  };

  const nextEventHandler = () => {
    if (props.stepNumber === 1) step1NextEventHandler();
    if (props.stepNumber === 2) console.log('NOT YET.');
  };

  const previousEventHandler = () => {
    if (props.stepNumber === 1) return alert('This is the first page.');
    if (props.stepNumber === 2) return navigate('/');
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
