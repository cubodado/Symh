import './index.css';
import PulsingHeart from './PulsingHeart/PulsingHeart';
import LoadingBar from './LoadingBar/LoadingBar';
import LandingText from './LandingText/LandingText';

const LandingPage = (props) => {
  return (
    <main className="landing-div">
      <div className="text-div">
        <LandingText landingText={props.landingText} />
        <PulsingHeart />
      </div>
      <LoadingBar />
    </main>
  );
};

export default LandingPage;
