import './App.css';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import { useTheme, ThemeProvider } from "./ThemeProvider.tsx"
import LayoutEffectExample from './LayoutEffectExample.js';
function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme()
  return (
    <div style={{ background: dark ? "#333" : "#fff", color: dark ? "#fff" : "#000" }}>
      <button onClick={toggleTheme}>Przełącz motyw</button>
    </div>
  )
}

function App() {
  return (
    <div className="App app-shell">
      <main className="lab-page">
        <div className="lab-grid">
          <div className="lab-card">
            <p>Zadanie 1:</p>
            <ClickCounter />
          </div>
          <div className="lab-card">
            <p>Zadanie 2:</p>
            <PrimeCalculator />
          </div>
          <div className="lab-card">
            <p>Zadanie 3:</p>
            <FormReducer />
          </div>
          <div className="lab-card">
            <p>Zadanie 4:</p>
            <ThemeProvider>
              <ThemeSwitcher />
            </ThemeProvider>
          </div>
          <div className="lab-card">
            <p>Zadanie 5:</p>
            <LayoutEffectExample />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
