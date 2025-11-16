import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';

function App() {
  return (
    <div className="App">
      <ToggleDetails />
      <ScoreDisplay score={0} />
      <ScoreDisplay score={75} />
      <ScoreDisplay score={500} />
    </div>
  );
}

export default App;
