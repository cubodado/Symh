import './App.css';
import { LandingPage } from './components/layout/navigation/index';
import { Step1, Step2, Step3 } from './views/Steps/index';
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
