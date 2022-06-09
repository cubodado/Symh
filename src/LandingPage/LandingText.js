import './LandingText.css';
import { Fragment } from 'react';

const LandingText = () => {
  return (
    <Fragment>
      <div className="landing-div">
        <p id="landing-text">Send your moving heart</p>
      </div>
      <div className="heart-div">
        <div id="heart"></div>
      </div>
    </Fragment>
  );
};

export default LandingText;
