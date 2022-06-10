import './NavigationButtons.css';
import { GrPrevious, GrNext } from 'react-icons/gr';

const NavigationButtons = () => {
  return (
    <div className="buttons">
      <button>
        <GrPrevious className="icons" />
      </button>
      <button>
        <GrNext className="icons" />
      </button>
    </div>
  );
};

export default NavigationButtons;
