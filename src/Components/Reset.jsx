import GameState from "./GameState"

// eslint-disable-next-line react/prop-types
const Reset = ({gameState, onReset}) => {
    if(gameState === GameState.inProgress){
        return;
    }
  return (
<button onClick = {onReset} className="reset-button">Reset</button>
  )
}

export default Reset