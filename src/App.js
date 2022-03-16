import { useState } from 'react';
import './App.css';
import Left1 from './components/Left1';
import Right1 from './components/Right1';

function App() {
  let [count, setCount] = useState(0);

  const onCountAdd = () => setCount(count + 1);

  const onCountMinus = () => setCount(count > 0 ? count - 1 : count);

  return (
    <div className="App">
      <h3>Root</h3>
      <div id="container">
        <Left1 count={count}></Left1>
        <Right1 onCountAdd={onCountAdd} onCountMinus={onCountMinus}></Right1>
      </div>
    </div>
  );
}

export default App;