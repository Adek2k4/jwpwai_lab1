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
    <div className="App">
      <ClickCounter />
      <PrimeCalculator />
      <FormReducer />
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      <LayoutEffectExample />
    </div>
  );
}

export default App;
