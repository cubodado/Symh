import './LandingPageMain.css';
import PulsingHeart from './PulsingHeart';
import LoadingBar from './LoadingBar';
import LandingText from './LandingText';

const LandingPageMain = () => {
  return (
    <main className="landing-div">
      <div className="text-div">
        <LandingText />
        <PulsingHeart />
      </div>
      <LoadingBar />
    </main>
  );
};

export default LandingPageMain;
