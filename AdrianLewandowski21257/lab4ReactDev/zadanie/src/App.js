import HelloWithProps from './HelloWithProps';
import Hello from './Hello';
import Counter from './Counter';

function App() {
return (
  <div>
    <Hello />
    <HelloWithProps name="Asia"/>
    <HelloWithProps name="Kasia"/>
    <HelloWithProps name="Basia"/>
    <Counter />
  </div>
);
}
export default App;