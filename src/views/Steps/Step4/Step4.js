import '../../../App.css';
import './Step4.css';
import LandingPage from '../../../components/layout/navigation/LandingPage';
import { Step5 } from '../index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Step4 = () => {
  const steps = useSelector((state) => state.steps);
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 4500);
  });

  console.log(steps);

  return (
    <div className="wrapper">
      {flag === false ? (
        <LandingPage landingText={'Your heart skips a beat'} />
      ) : (
        <Step5 />
      )}
    </div>
  );
};

export default Step4;
