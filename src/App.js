import './App.css';
import { LandingPage } from './components/layout/navigation/index';
import { Step1, Step2, Step3, Step4 } from './views/Steps/index';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Card } from './views/3D/index';

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
            element={
              flag === false ? (
                <LandingPage landingText={'Send your moving heart'} />
              ) : (
                <Step1 />
              )
            }
          />
          <Route path="/step/1" element={<Step1 />} />
          <Route path="/step/2" element={<Step2 />} />
          <Route path="/step/3" element={<Step3 />} />
          <Route path="/step/4" element={<Step4 />} />
          <Route path="/3d" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
