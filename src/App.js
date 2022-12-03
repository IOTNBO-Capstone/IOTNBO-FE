import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import ResultsPage from './Components/ResultsPage/ResultsPage';
import Resources from './Components/Resources/Resources';
import OutboundLink from './Components/OutboundLink/OutboundLink';

function App() {
  return (
    <div className="landing">
      <header className="iotnbo">
        <h1>It's Okay To Not Be Okay!</h1>
      </header>
        <LandingPage />
        <ResultsPage />
        <Resources />
        <OutboundLink />
    </div>
  );
}

export default App;
