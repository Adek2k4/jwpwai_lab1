import HelloWithProps from './HelloWithProps';
import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';

function App() {
return (
  <div>
    <Hello />
    <HelloWithProps name="Asia"/>
    <HelloWithProps name="Kasia"/>
    <HelloWithProps name="Basia"/>
    <Counter />
    <InputTracker />
  </div>
);
}
export default App;