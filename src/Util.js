export function calculateWinner(squares) {
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

  export function add(a, b){
      return a+b;
  }
