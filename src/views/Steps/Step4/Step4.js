import '../../../App.css';
import './Step4.css';
import LandingPage from '../../../components/layout/navigation/LandingPage';
import { Result } from '../index';
import { useEffect, useState } from 'react';

const Step4 = () => {
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 4500);
  });

  return (
    <div className="wrapper">
      {flag === false ? (
        <LandingPage landingText={'Your heart skips a beat'} />
      ) : (
        <Result />
      )}
    </div>
  );
};

export default Step4;
