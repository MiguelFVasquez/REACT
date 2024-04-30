import { WINNER_COMBOS } from "./constants/constants"

export const checkWinnerFrom = (boardToCheck) =>{
    for(const combo of WINNER_COMBOS){
      const[a,b,c] =combo
      if(boardToCheck[a] && 
         boardToCheck[a]=== boardToCheck[b] &&
         boardToCheck[a] === boardToCheck[c])
         {
          return boardToCheck[a] // x u o
      }
    }
    return null //Si no hay ganador

}

export const checkEndGame = (newBoard) =>{
  //Se revisa si hay empate 
  //SI no hay mas espacios vacios en el tablero
  //
  return newBoard.every((square) => square !== null)
}