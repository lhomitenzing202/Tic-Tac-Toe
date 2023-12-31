
import { useEffect, useState } from "react"
import Board from "./Board"
import GameState from "./GameState";
import GameOver from "./GameOver";
import Reset from "./Reset";

    const player1 ="X";
    const player2 ="O";

   const winningCombo =[
    //row
    {combo :[0,1,2],strikeClass: "strike-row-1"},
    {combo :[3,4,5],strikeClass: "strike-row-2"},
    {combo :[6,7,8],strikeClass: "strike-row-3"},
    //columns
    {combo :[0,3,6],strikeClass: "strike-column-1"},
    {combo :[1,4,7],strikeClass: "strike-column-2"},
    {combo :[2,5,8],strikeClass: "strike-column-3"},

    //Diagonal
    {combo :[0,4,8],strikeClass: "strike-diagonal-1"},
    {combo :[6,4,2],strikeClass: "strike-diagonal-2"},

    ];

    function checkWinner(tiles,setStrikeClass,setGameState){
      for (const{combo,strikeClass} of winningCombo){
        const titleValue1 = tiles[combo[0]];
        const titleValue2 = tiles[combo[1]];
        const titleValue3 = tiles[combo[2]];

        if(titleValue1!== null && titleValue1 == titleValue2 
            && titleValue1 == titleValue3){
            setStrikeClass(strikeClass);

            if(titleValue1=== player1){
                setGameState(GameState.player1wins)
            }else{
                setGameState(GameState.player2wins)
            }
            return ;
        }
      }
      const allTilesFilled=tiles.every((tile)=>tile!==null);
      if (allTilesFilled){
        setGameState(GameState.draw);
      }
       }
       

const Tictactoe = () => {
    const[tiles,setTiles] = useState(Array(9).fill(null));
    const[playerTurn,setPlayerTurn]= useState(player1);
    const[strikeClass, setStrikeClass]=useState();
    const[gameState,setGameState]=useState(GameState.inProgress)

    const handleTileClick = (index)=>{
        if(gameState!==GameState.inProgress){
            return;
        }


        if(tiles[index]!== null){
            return;
        }
    
        const newTiles=[...tiles];
        newTiles[index]= playerTurn;
        setTiles(newTiles);
        if(playerTurn===player2){
            setPlayerTurn(player1);
        }else{setPlayerTurn(player2);

        }    
    };

    const handleReset=()=>{
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn(player1);
        setStrikeClass(null)
    };

    useEffect(()=>{
       checkWinner(tiles,setStrikeClass,setGameState); 
    },[tiles]);
        
    
  return (
    <div>
        <h1>Tic Tac Toe</h1>
      
      <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass}/>
      <GameOver gameState={gameState}/>
      <Reset gameState={gameState} onReset ={handleReset}/>
    </div>   
  )
}

export default Tictactoe