// horizontal win
// same as vertical win but alternate the x and y in the switch statement
export const horizontalWin = (board) => {
  let player1 = 0
  let player2 = 0
  let prevCounter = null

  // loop through columns
  for (let y = 0; y <= 5; y++) {
    // loop through rows
    // reset counter after each row
    player1 = 0
    player2 = 0
    for (let x = 0; x <= 6; x++) {
      // switch statement with conditions: player1, player2, default = null
      switch (board[x][y]) {
        case 1:
          if (prevCounter === null) {
            player1 = 1
            prevCounter = 1
          } else if (prevCounter === 1) {
            // if same add 1 to current player
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

      if (player1 >= 4) {
        return 1
      } else if (player2 >= 4) {
        return 2
      }
    }
  }
}

// set player 1 and 2 counters, default = 0
// set previous column value, default = []
// set current column value, default = []
// for loop that runs 7 times, first run only sets prev column
// all other runs compare current column with prev column
