// diagonal win
export const diagonalWin = (board) => {
  let player1 = 0
  let player2 = 0
  let prevCounter = null

  const switchBoard = (board, x, y) => {
    switch (board[x][y]) {
      case 1:
        if (prevCounter === null) {
          player1 = 1
          prevCounter = 1
        } else if (prevCounter === 1) {
          player1 += 1
          prevCounter = 1
        } else {
          player1 = 1
          player2 = 0
          prevCounter = 1
        }
        break
      case 2:
        if (prevCounter === null) {
          player2 = 1
          prevCounter = 2
        } else if (prevCounter === 2) {
          player2 += 1
        } else {
          player1 = 0
          player2 = 1
          prevCounter = 2
        }
        break
      default:
        prevCounter = null
    }
  }
  // // positive diagonal check 1
  for (let z = 3; z <= 5; z++) {
    // reset counter after each row
    player1 = 0
    player2 = 0
    for (let x = 0, y = z; x <= z && y >= 0; x++, y--) {
      switchBoard(board, x, y)
      if (player1 >= 4) {
        return 1
      } else if (player2 >= 4) {
        return 2
      }
    }
  }
  // // positive diagonal check 2
  for (let z = 1; z <= 3; z++) {
    player1 = 0
    player2 = 0
    for (let x = z, y = 5; x <= 6; x++, y--) {
      switchBoard(board, x, y)
      if (player1 >= 4) {
        return 1
      } else if (player2 >= 4) {
        return 2
      }
    }
  }
  // negative diagonal check 1
  for (let z = 0; z <= 2; z++) {
    player1 = 0
    player2 = 0
    for (let x = 0, y = z; y <= 5; x++, y++) {
      switchBoard(board, x, y)
      if (player1 >= 4) {
        return 1
      } else if (player2 >= 4) {
        return 2
      }
    }
  }
  // negative diagonal check 2
  for (let z = 1; z <= 3; z++) {
    player1 = 0
    player2 = 0
    for (let x = z, y = 0; x <= 6; x++, y++) {
      switchBoard(board, x, y)
      if (player1 >= 4) {
        return 1
      } else if (player2 >= 4) {
        return 2
      }
    }
  }
}
