
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <User name='arman-mia' age={27} isRegistered={true} />
      <User name='Shohidullah' age={26} isRegistered={false} />
    </div>
  );
}

export default App;
