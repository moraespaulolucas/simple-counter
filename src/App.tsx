import { useState, useEffect } from 'react';
import './styles/reset.css';
import './styles/main.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  useEffect(() => {
    if (count % 2 != 0) {
      document.title += ' - Odd';
    } else {
      document.title += ' - Even';
    }
  }, [count]);

  return (
    <div className="container">
      <h1>Counter</h1>
      <p>{count}</p>
      <div className="buttons">
        <button onClick={() => decreaseCounter()}>Decrease -</button>
        <button onClick={() => increaseCounter()}>Increase +</button>
      </div>
    </div>
  );
}

export default App;
