import './LandingPageMain.css';
import PulsingHeart from './PulsingHeart';
import { Fragment } from 'react';

const LandingPageMain = () => {
  return (
    <Fragment>
      <div className="landing-text">
        <p id="landing-text">Send your moving heart</p>
        <PulsingHeart />
      </div>
    </Fragment>
  );
};

export default LandingPageMain;
