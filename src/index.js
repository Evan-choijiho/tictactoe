import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createSecureContext } from 'tls';
import Game from './Game';

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//         clickedSquare: 0,
//       }],
//       stepNumber: 0,
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();

//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//         clickedSquare:  i,
//       }]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0,
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);
//     const moves = history.map((step, move) => {
//       //arr.map(callback(currentValue[, index[, array]])
//       const clickedRow = (history[move].clickedSquare) / 3 + 1;
//       const clickedCol = (history[move].clickedSquare) % 3 + 1;
//       const desc = move ?
//         'Go to move #' + move +'('+Math.floor(clickedRow)+', '+clickedCol+' )' :
//         'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });
//     let status;
//     if (winner == null) {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     } else {
//       status = 'Winner: ' + winner;
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {

    const a = squares[lines[i][0]];
    const b = squares[lines[i][1]];
    const c = squares[lines[i][2]];
    if (a == b && a == c && b == c) {
      return a;
    }
  }
  return null;
}