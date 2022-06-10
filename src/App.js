import './App.css';
import LandingPageMain from './LandingPage/LandingPageMain';
import Step1 from './Steps/StepPages/Step1';
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
            element={flag === false ? <LandingPageMain /> : <Step1 />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
