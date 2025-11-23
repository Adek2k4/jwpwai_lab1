import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList'
import TimerCounter from './TimerCounter';
import HandleClick from './HandleClick';
import HandleMouseOver from './HandleMouseOver';
import ShowImage from './ShowImage';
import LoadDataFromJson from './LoadDataFromJson';
import UploadFile from './UploadFile';
import ChangeStyle from './ChangeStyle';

function App() {
  return (
    <div className="App app-shell">
      <main className="lab-page">
        <div className="lab-grid">
          <div className="lab-card">
            <p>Zadanie 1:</p>
            <ToggleDetails />
          </div>
          <div className="lab-card">
            <p>Zadanie 2:</p>
            <ScoreDisplay score={0} />
            <ScoreDisplay score={75} />
            <ScoreDisplay score={500} />
          </div>
          <div className="lab-card">
            <p>Zadanie 3:</p>
            <TaskList />
          </div>
          <div className="lab-card">
            <p>Zadanie 4:</p>
            <UserList />
          </div>
          <div className="lab-card">
            <p>Zadanie 5:</p>
            <TimerCounter />
          </div>
          <div className="lab-card">
            <h1>Komponenty:</h1>
            <div className="component-grid">
              <HandleClick />
              <HandleMouseOver />
              <ShowImage />
              <LoadDataFromJson />
              <UploadFile />
              <ChangeStyle />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
