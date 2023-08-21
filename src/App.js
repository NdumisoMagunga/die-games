import logo from './logo.svg';
import './App.css';

import Die from './Die';

function App() {
  return (
    <div className="App">
      <Die face='five' />
      <Die face='two' />
      <Die face='six' />
      <Die face='three' />
    </div>
  );
}

export default App;
