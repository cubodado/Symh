import './App.css';
import LandingPageMain from './LandingPage/LandingPageMain';
import Step from './StepPage/Step';
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
      {flag === false ? <LandingPageMain /> : <Step />}
    </div>
  );
}

export default App;
