import './App.css';
import LandingPageMain from './LandingPage/LandingPageMain';
import Step1 from './Steps/StepPages/Step1';
import { useState, useEffect } from 'react';

function App() {
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 4500);
  });

  return (
    <div className="wrapper">
      {flag === false ? <LandingPageMain /> : <Step1 />}
    </div>
  );
}

export default App;
