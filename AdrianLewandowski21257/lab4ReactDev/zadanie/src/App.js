import HelloWithProps from './HelloWithProps';
import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';

function App() {
return (
  <div>
    <Hello />
    <HelloWithProps name="Asia"/>
    <HelloWithProps name="Kasia"/>
    <HelloWithProps name="Basia"/>
    <Counter />
    <InputTracker />
    <LoginStatus isLoggedIn={true} />
    <LoginStatus isLoggedIn={false} />
  </div>
);
}
export default App;