import './Step.css';
import { GrPrevious, GrNext } from 'react-icons/gr';

const Step = () => {
  return (
    <main className="step-div">
      <h2 className="step-text">Step 1</h2>
      <h1 className="step-info-text">Write down your short letter.</h1>
      <input className="user-input"></input>
      <div className="buttons">
        <button>
          <GrPrevious className="icons" />
        </button>
        <button>
          <GrNext className="icons" />
        </button>
      </div>
    </main>
  );
};

export default Step;
