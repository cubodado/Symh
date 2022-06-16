import './NavigationButtons.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = (props) => {
  let navigate = useNavigate();

  const validateNextEvent = () => {
    if (props.nextCheck.length === 0) {
      alert(props.alertMessage);
    } else {
      props.updateStore();
      navigate(props.nextPage);
    }
  };

  const previousEventHandler = () => {
    if (props.stepNumber !== 1) {
      const message =
        'If you go back to previous page, you lost your selection. Is it okay?';
      const result = window.confirm(message);
      if (result) return navigate(-1);
    } else {
      return alert('This is the first page.');
    }
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
