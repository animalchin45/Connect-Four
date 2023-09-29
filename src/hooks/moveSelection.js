export const moveSelection = (board, column, player) => {
  // on column click check if first position is taken
  if (board[column][0] === null) {
    // else place chip in next available position
    for (let i = 0; i < 6; i++) {
      if (board[column][i] != null) {
        const replaceAt = i - 1
        const boardUpdate = [
          ...board[column].slice(0, replaceAt),
          player,
          ...board[column].slice(replaceAt + 1),
        ]
        return {
          newBoardColumn: boardUpdate,
          updatedColumn: column,
        }
      }
    }
    // no moves on column, then place chip at last position
    const replaceAt = 5
    const boardUpdate = [...board[column].slice(0, replaceAt), player]
    return {
      newBoardColumn: boardUpdate,
      updatedColumn: column,
    }
  } else {
    return 'no moves left'
  }
}

// Board implementation
// once valid move is made place new chip
// run all win checkers
// move to next turn if no win is detected
