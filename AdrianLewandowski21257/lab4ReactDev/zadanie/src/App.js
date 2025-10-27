import HelloWithProps from './HelloWithProps';
import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';

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
    <TodoList todos={['Nauczyć się Reacta', 'Zrobić zakupy', 'Pójść na spacer', 'Dostać piątkę z JWPWAI']} />
    <LoginForm />
  </div>
);
}
export default App;