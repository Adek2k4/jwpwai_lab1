import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList'
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div className="App">
      <p>Zadanie 1:</p>
      <ToggleDetails />
      <p>Zadanie 2:</p>
      <ScoreDisplay score={0} />
      <ScoreDisplay score={75} />
      <ScoreDisplay score={500} />
      <p>Zadanie 3:</p>
      <TaskList />
      <p>Zadanie 4:</p>
      <UserList/>
      <p>Zadanie 5:</p>
      <TimerCounter/>
    </div>
  );
}

export default App;
