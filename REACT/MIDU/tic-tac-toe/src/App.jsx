import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { TURN } from "./constants";
import { checkWinner, checkEndGame } from "./logics/board";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameFromStorage, saveGameInStorage } from "./logics";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFronStorage = window.localStorage.getItem("board");
    return boardFronStorage
      ? JSON.parse(boardFronStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURN.x;
  });

  //NULL no hay ganador, FALSE si es empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.x);
    setWinner(null);

    resetGameFromStorage();
  };

  const updateBoard = (index) => {
    //Si ya hay algo en esta casilla
    if (board[index] || winner) return;

    //Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //Cambiar el turno
    const newTurn = turn === TURN.x ? TURN.o : TURN.x;
    setTurn(newTurn);

    //SALVAR PARTIDA
    saveGameInStorage({ board: newBoard, turn: newTurn });

    //Revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      // console.log(newBoard, turn);
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <>
      <main className="board">
        <h1>TIC TAC TOE</h1>

        <button onClick={resetGame}>Resetear Juego</button>

        <section className="game">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>

        <section className="turn">
          <Square isSelected={turn === TURN.x}>{TURN.x}</Square>
          <Square isSelected={turn === TURN.o}>{TURN.o}</Square>
        </section>

        <WinnerModal winner={winner} resetGame={resetGame} />

        {winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>{winner === false ? "Empate" : "Ganó"}</h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
