import './skid-dice.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectForReroll } from '../../components/skidderSlice'

function SkidDice(props) {
  const rerolling = useSelector((state) => state.skidder.rerolling)
  const selectedForReroll = useSelector((state) => state.skidder.selectedForReroll)
  const rerolled = useSelector((state) => state.skidder.rerolled)
  const dispatch = useDispatch()

  const diceClass = () => {
    var classMap = ["hazard", "spin", "slide", "shift", "shift", "shift"]
    return `skid-dice ${classMap[props.roll]}`
  }

  const innerClass = () => {
    if(selectedForReroll.includes(props.index)) {
      if(rerolled === true) {
        return 'skid-dice--inner  skid-dice--inner-rerolled'
      } else {
        return 'skid-dice--inner  skid-dice--inner-selected'
      }
    } else {
      return 'skid-dice--inner'
    }
  }

  const handleClick = () => {
    if (rerolling === true && !rerolled) {
      dispatch(selectForReroll(props.index));
    } else {
      console.log('rerolling no')
    }
  }

  return (
    <div className={diceClass()}>
      <div className={innerClass()} onClick={() => handleClick()}>
      </div>
    </div>
  );
}

export default SkidDice;
