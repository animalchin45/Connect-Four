import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { v4 as uuid4 } from 'uuid'

import Chip from './Chip'
import MoveSelector from './Buttons/MoveSelector'

import { chipPosistions } from '../hooks/chipPositions'
import { winChecker } from '../hooks/winChecker'
import { declareWinner } from '../features/gameSlice'

import BoardWhiteLarge from '../assets/images/board-layer-white-large.svg'
import BoardWhiteSmall from '../assets/images/board-layer-white-small.svg'
import BoardBlackLarge from '../assets/images/board-layer-black-large.svg'
import BoardBlackSmall from '../assets/images/board-layer-black-small.svg'

function Board() {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const dispatch = useDispatch()
  const { turn, winner, board } = useSelector((state) => state.game)
  const [chips, setChips] = useState([])

  const renderedChips = chips.map((item) => {
    return <Chip position={item.position} player={item.player} key={uuid4()} />
  })

  useEffect(() => {
    setChips(chipPosistions(board))
    if (winChecker(board)) {
      dispatch(declareWinner(winChecker(board)))
    }
  }, [board])

  return (
    <div className='board'>
      {winner === 0 && (
        <div className='board__selector-container'>
          <MoveSelector column={0} player={turn} />
          <MoveSelector column={1} player={turn} />
          <MoveSelector column={2} player={turn} />
          <MoveSelector column={3} player={turn} />
          <MoveSelector column={4} player={turn} />
          <MoveSelector column={5} player={turn} />
          <MoveSelector column={6} player={turn} />
        </div>
      )}
      <div className='board__white'>
        {!isMobile ? <BoardWhiteLarge /> : <BoardWhiteSmall />}
      </div>
      <div className='board__holes'>{renderedChips}</div>
      <div className='board__black'>
        {!isMobile ? <BoardBlackLarge /> : <BoardBlackSmall />}
      </div>
    </div>
  )
}

export default Board
