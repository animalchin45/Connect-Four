import React from 'react'
import { useDispatch } from 'react-redux'

import Check from './Buttons/Check'

import { rules } from '../features/gameSlice'

function Rules() {
  const dispatch = useDispatch()

  const handleRules = () => {
    dispatch(rules())
  }

  return (
    <div className='rules'>
      <div className='rules__container'>
        <p className='heading-lg'>Rules</p>

        <div className='rules__topics'>
          <div>
            <p className='heading-sm font-purple'>Objective</p>
            <p className='heading-xs heading-xs--lowercase font-lite'>
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
          </div>
          <div>
            <p className='heading-sm font-purple'>How to Play</p>
            <div className='rules__howto'>
              <p className='heading-xs'>1</p>
              <p className='heading-xs heading-xs--lowercase font-lite'>
                Red goes first in the first game.
              </p>
              <p className='heading-xs'>2</p>
              <p className='heading-xs heading-xs--lowercase font-lite'>
                Players must alternate turns, and only one disc can be dropped
                in each turn.
              </p>
              <p className='heading-xs'>3</p>
              <p className='heading-xs heading-xs--lowercase font-lite'>
                The game ends when there is a 4-in-a-row or a stalemate.
              </p>
              <p className='heading-xs'>4</p>
              <p className='heading-xs heading-xs--lowercase font-lite'>
                The starter of the previous game goes second on the next game.
              </p>
            </div>
          </div>
        </div>
        <Check action={handleRules} />
      </div>
    </div>
  )
}

export default Rules
