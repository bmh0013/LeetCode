/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    let rowStorage = [];
    let colStorage = [];
    
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== '.') {
          if (!rowStorage.includes(board[i][j])) {
            rowStorage.push(board[i][j])
          } else {
            return false;
          }
      }

      if (board[j][i] !== '.') {
          if (!colStorage.includes(board[j][i])) {
            colStorage.push(board[j][i])
          } else {
            return false;
          }
      }
    }
    
    for (let k = 0; k < 9; k+=3) {
      for (let l = 0; l < 9; l+=3) {
        let square = [
          board[k][l], board[k][l+1], board[k][l+2],
          board[k+1][l], board[k+1][l+1], board[k+1][l+2],
          board[k+2][l], board[k+2][l+1], board[k+2][l+2]
          ];
        let filtered = square.filter( (num) => {
          if (num !== '.') {
            return num
          }
        })
        let sqrStorage = [];
        filtered.forEach(num => {
            if (sqrStorage.includes(num)) {
                return false;
            } else {
                sqrStorage.push(num)
            }
        })
        if (filtered.length !== sqrStorage.length) {
            return false;
        }
        sqrStorage = [];
      }
    }
    rowStorage = [];
    colStorage = [];
  }

  return true;
};