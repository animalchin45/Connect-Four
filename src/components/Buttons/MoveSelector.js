import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { nextTurn, newMove } from '../../features/gameSlice'

import { moveSelection } from '../../hooks/moveSelection'

import MarkerRed from '../../assets/images/marker-red.svg'
import MarkerYellow from '../../assets/images/marker-yellow.svg'

function MoveSelector({ column, player }) {
  const dispatch = useDispatch()
  const { turn, winner, board } = useSelector((state) => state.game)

  const handleMoveSelection = () => {
    if (moveSelection(board, column, player) !== 'no moves left') {
      dispatch(newMove(moveSelection(board, column, player)))

      if (winner === 0) {
        dispatch(nextTurn())
      }
    }
  }

  return (
    <button className='btn btn--selector' onClick={handleMoveSelection}>
      {turn === 1 && <MarkerRed />}
      {turn === 2 && <MarkerYellow />}
    </button>
  )
}

export default MoveSelector
