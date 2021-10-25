import React from 'react';
import { render } from 'react-dom';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(100);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}
export default App;
