import './App.css';
import { LandingPage } from './components/layout/navigation/index';
import Step1 from './Steps/StepPages/Step1';
import Step2 from './Steps/StepPages/Step2';
import Step3 from './Steps/StepPages/Step3';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 4500);
  });

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={flag === false ? <LandingPage /> : <Step1 />}
          />
          <Route path="/step/1" element={<Step1 />} />
          <Route path="/step/2" element={<Step2 />} />
          <Route path="/step/3" element={<Step3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
