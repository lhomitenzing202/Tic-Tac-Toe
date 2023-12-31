import GameState from "./GameState"

// eslint-disable-next-line react/prop-types
const GameOver = ({gameState}) => {
switch(gameState){
    case GameState.inProgress:
        return<></>;
        case GameState.player1wins:
            return <div className="game-over">Player 1 wins</div>;
            case GameState.player2wins:
            return <div className="game-over">Player 2 wins</div>;
            case GameState.draw:
            return <div className="game-over">Draw</div>;
            default:
                return<></>;
}
}

export default GameOver