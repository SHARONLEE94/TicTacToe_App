import { useState } from "react";
import "./App.css"
import Board from "./components/Board";

function App() {

  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for(let index = 0; index < lines.length; index++) {
      const [a,b,c] = lines[index];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[history.length-1];
  const winner = calculateWinner(current.squares);
  let status;
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newSquares = current.squares.slice();
    if(calculateWinner(newSquares) || newSquares[i]) {
      return // → 게임이 끝났거나, 이미 클릭된 칸이면 더 이상 진행하지 않고 반환(return)한다
    }
    newSquares[i]  = xIsNext ? 'X' : 'O';
    setHistory([...history, {squares: newSquares}]);
    setXIsNext(current => !current);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={ current.squares }
          onClick={ (i) => {handleClick(i)} }/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>{/* todo */}</div>
      </div>
    </div>
  );
}

export default App;
