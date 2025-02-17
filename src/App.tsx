
import './App.css';
import User from './components/User';

const user1 = {
  name: "Abdullah",
  age: 24,
  isRegistered: false,
  lang: ['Bangla', 'Arabic', 'English'],
}

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <User name='arman-mia' age={27} isRegistered={true} lang={['Arabic','English', 'Bangla']} user={user1} />
      {/* <User name='Shohidullah' age={26} isRegistered={false} /> */}
    </div>
  );
}

export default App;
