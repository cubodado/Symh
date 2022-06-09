import './LandingPageMain.css';
import PulsingHeart from './PulsingHeart';
import LoadingBar from './LoadingBar';
import { Fragment } from 'react';

const LandingPageMain = () => {
  return (
    <Fragment>
      <main className="landing-div">
        <div className="landing-text">
          <p id="landing-text">Send your moving heart</p>
          <PulsingHeart />
        </div>
        <LoadingBar />
      </main>
    </Fragment>
  );
};

export default LandingPageMain;
