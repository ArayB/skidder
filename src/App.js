import './App.css';
import SkidDice from './components/skid-dice'
import { useState } from 'react'

function App() {
  const [rolls, setRolls] = useState([])

  const setRolledDice = (no) => {
    var rolling = Array.from({length: no}, () => Math.floor(Math.random() * 6));
    setRolls(rolling)
  }

  return (
    <div className="App">
      <h1>
        Skidder
      </h1>
      <p>
        Tap number of dice to roll:
      </p>
      <div>
        <button className="roll-button" value="1" onClick={() => setRolledDice(1)}>1</button>
        <button className="roll-button" value="2" onClick={() => setRolledDice(2)}>2</button>
        <button className="roll-button" value="3" onClick={() => setRolledDice(3)}>3</button>
        <button className="roll-button" value="4" onClick={() => setRolledDice(4)}>4</button>
        <button className="roll-button" value="5" onClick={() => setRolledDice(5)}>5</button>
      </div>
      <p>
      </p>
      <div>
        { rolls.map((roll, index) => <SkidDice key={index} roll={roll} />) }
      </div>
    </div>
  );
}

export default App;
