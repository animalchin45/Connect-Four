export const chipPosistions = (board) => {
  const chips = []

  for (let x = 0; x <= 6; x++) {
    // loop through columns
    for (let y = 0; y <= 5; y++) {
      // loop through rows
      if (board[x][y] !== null) {
        chips.push({
          position: [x + 1, y + 1],
          player: board[x][y],
        })
      }
    }
  }
  return chips
}
