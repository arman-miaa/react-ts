
import { useState } from 'react';
import './App.css';

type User = {
  id: number,
  name: string,
}

function App() {
  const [count, setCount] = useState<null | User>(null);

  const handleCount = () => {
    setCount({ id: 1, name: "Arman" });
    console.log(count);
  }

  return (
    <div className='App'>
      <h1>{ count?.name}</h1>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
}

export default App;



