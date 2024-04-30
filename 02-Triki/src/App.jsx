import {useState} from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import {TURNS } from './constants/constants'
import { WinnerModal } from './components/WinnerModal'
import { checkWinnerFrom, checkEndGame } from './board'


function App() {
  const [board, setBoard]= useState(Array(9).fill(null))
  const [turn, setTurn]= useState(TURNS.X)
  const [winner, setWinner]= useState(null) //Null, no hay ganador, false hay empate
  
   

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  //Función para actualizar el tablero
  const updateBoard = (index) =>{
    //Verificar que no haya nada para que no se sobreescriba
    if(board[index] || winner ) return
    //Actualizar tablero
    const newBoard= [... board]
    newBoard[index]= turn //Guarda en la posición clickeada el x u o 
    setBoard(newBoard) 
    //Cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) 
    //Revisar si hay ganador
    const newWinner= checkWinnerFrom (newBoard)
   
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) 
    }

  }


  return (
    <main className='board'>
      <h1>Triki</h1>
      <button onClick={resetGame }>Reset game</button>
      <section className='game'>
        {
          board.map((_,index) => {
            return(
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section> 

       <section className='turn'> 
        <Square isSelected={turn===TURNS.X}>
          {TURNS.X}
        </Square> 
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
        <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  
  )
}

export default App
