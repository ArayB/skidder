import './App.css';
import SkidDice from './components/skid-dice'
import { useSelector, useDispatch } from 'react-redux'
import { setRerolling, createRolls, reroll, reset } from './components/skidderSlice'

function App() {
  const rolls = useSelector((state) => state.skidder.rolls)
  const rerolling = useSelector((state) => state.skidder.rerolling)
  const rerolled = useSelector((state) => state.skidder.rerolled)
  const dispatch = useDispatch()

  const handleButtonClick = (no) => {
    dispatch(reset());
    dispatch(createRolls(no));
  }

  return (
    <div className="App">
      <h1>
        Skidder
      </h1>
      {
        (() => {
          if(!rerolling || rerolled) {
            return(
              <div>
                <p>
                  Tap number of dice to roll:
                </p>
                <div>
                  <button className="roll-button" value="1" onClick={() => handleButtonClick(1)}>1</button>
                  <button className="roll-button" value="2" onClick={() => handleButtonClick(2)}>2</button>
                  <button className="roll-button" value="3" onClick={() => handleButtonClick(3)}>3</button>
                  <button className="roll-button" value="4" onClick={() => handleButtonClick(4)}>4</button>
                  <button className="roll-button" value="5" onClick={() => handleButtonClick(5)}>5</button>
                </div>
              </div>
            )
          }
        })()
      }
      <p>
      </p>
      <div>
        { rolls.map((roll, index) => <SkidDice key={index} roll={roll} index={index} />) }
      </div>
      <div>
        {
          (() => {
            if (rolls.length > 0 && !rerolling) {
              return (
                <div>
                  <h2>Push It!</h2>
                  <p>
                    If you want to Push it, tap 'choose dice' and then select the dice you wish to re-roll.
                  </p>
                  <p>
                    <button className="roll-button" value="choose" onClick={() => dispatch(setRerolling(true))}>Choose Dice</button>
                  </p>
                </div>
              )
            } else if (rerolling === true && !rerolled) {
                return (
                  <div>
                    <h2>Pushing It!</h2>
                    <p>
                      Select the dice you wish to re-roll then tap the reroll button
                    </p>
                    <p>
                      <button className="roll-button" value="choose" onClick={() => dispatch(reroll())}>Reroll</button>
                    </p>
                  </div>
                )
            }
          })()
        }
      </div>
    </div>
  );
}

export default App;
