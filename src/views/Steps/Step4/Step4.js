import '../../../App.css';
import './Step4.css';
import LandingPage from '../../../components/layout/navigation/LandingPage';
import { useSelector } from 'react-redux';

const Step4 = () => {
  const steps = useSelector((state) => state.steps);
  console.log(steps);

  return (
    <div className="wrapper">
      <LandingPage landingText={'Your heart skips a beat'} />
    </div>
  );
};

export default Step4;
