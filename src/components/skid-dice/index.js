import './skid-dice.css'

function SkidDice(props) {
  const diceClass = () => {
    var classMap = ["hazard", "spin", "slide", "shift", "shift", "shift"]
    return `skid-dice ${classMap[props.roll]}`
  }

  return (
    <div className={diceClass()}>
    </div>
  );
}

export default SkidDice;
