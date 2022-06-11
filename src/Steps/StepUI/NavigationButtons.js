import './NavigationButtons.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = (props) => {
  let navigate = useNavigate();

  const validateNextEvent = () => {
    if (props.nextCheck.length === 0) {
      alert(props.alertMessage);
    } else {
      navigate(props.nextPage);
    }
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
      <button onClick={validateNextEvent}>
        <GrNext className="icons" />
      </button>
    </div>
  );
};

export default NavigationButtons;
