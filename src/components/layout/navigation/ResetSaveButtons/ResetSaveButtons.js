import '../index.css';
import './ResetSaveButtons.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetStates } from '../../../../store/step/stepsSlice';

const ResetSaveButtons = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const clickEventHandler = () => {
    dispatch(resetStates());

    navigate('/');
  };

  return (
    <div className="buttons">
      <button onClick={clickEventHandler}>
        <h2>Restart</h2>
      </button>
      <button>
        <h2>Save</h2>
      </button>
    </div>
  );
};

export default ResetSaveButtons;
