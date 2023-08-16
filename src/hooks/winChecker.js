// win condition consists of four chips of same player in a horizontal, vertical, or diagonal line
// check for horizontal, vertical, or diagonal win condition

// vertical win
export const verticalWin = (board) => {
  // set player 1 and 2 counters, default = 0
  // set previous counter value, default = null
  let player1 = 0
  let player2 = 0
  let prevCounter = null

  // loop through columns
  for (let x = 0; x <= 6; x++) {
    // loop through rows
    for (let y = 0; y <= 5; y++) {
      // switch statement with conditions: player1, player2, default = null
      switch (board[x][y]) {
        case 1:
          if (prevCounter === null) {
            // if null add 1 to appropriate player counter and set prev to current player
            player1 = 1
            prevCounter = 1
          } else if (prevCounter === 1) {
            // if same add 1 to current player
            player1 += 1
            prevCounter = 1
          } else {
            // if differnet reset other player counter and add 1 to current player, set prev to current player
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

      // after each switch statment runs, check player counters for value of 4
      // return value of 0 for no wins, 1 or 2 for win condition of appropriate player
      if (player1 >= 4) {
        // return 1
        console.log('Player 1 wins!')
      } else if (player2 >= 4) {
        // return 2
        console.log('Player 2 wins!')
      }
    }
  }
  // console.log(`Player 1: ${player1}`)
  // console.log(`Player 2: ${player2}`)
}

// horizontal win
// set player 1 and 2 counters, default = 0
// set previous column value, default = []
// set current column value, default = []
// for loop that runs 7 times, first run only sets prev column
// all other runs compare current column with prev column
