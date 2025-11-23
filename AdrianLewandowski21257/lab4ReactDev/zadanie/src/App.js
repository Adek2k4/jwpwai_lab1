import './App.css';
import HelloWithProps from './HelloWithProps';
import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App app-shell">
      <main className="lab-page">
        <div className="lab-grid">
          <div className="lab-card">
            <p>Zadanie 1:</p>
            <Hello />
          </div>
          <div className="lab-card">
            <p>Zadanie 2:</p>
            <HelloWithProps name="Asia" />
            <HelloWithProps name="Kasia" />
            <HelloWithProps name="Basia" />
          </div>
          <div className="lab-card">
            <p>Zadanie 3:</p>
            <Counter />
          </div>
          <div className="lab-card">
            <p>Zadanie 4:</p>
            <InputTracker />
          </div>
          <div className="lab-card">
            <p>Zadanie 5:</p>
            <LoginStatus isLoggedIn={true} />
            <LoginStatus isLoggedIn={false} />
          </div>
          <div className="lab-card">
            <p>Zadanie 6:</p>
            <TodoList todos={['Nauczyć się Reacta', 'Zrobić zakupy', 'Pójść na spacer', 'Dostać piątkę z JWPWAI']} />
          </div>
          <div className="lab-card">
            <p>Zadanie 7:</p>
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;