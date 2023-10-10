// win condition consists of four chips of same player in a horizontal, vertical, or diagonal line
// check for horizontal, vertical, or diagonal win condition
import { verticalWin } from './winHooks/verticalWin'
import { horizontalWin } from './winHooks/horizontalWin'
import { diagonalWin } from './winHooks/diagonalWin'

export const winChecker = (board) => {
  const vertical = verticalWin(board)
  const horizontal = horizontalWin(board)
  const diagonal = diagonalWin(board)

  diagonalWin(board)
  if (vertical) {
    return vertical
  } else if (horizontal) {
    return horizontal
  } else if (diagonal) {
    return diagonal
  }
}
