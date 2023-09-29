import React from 'react'
import { useDispatch } from 'react-redux'

import BigPill from './Buttons/BigPill'

import { reset, nextRound, pauseGame } from '../features/gameSlice'
import { resetScore } from '../features/playerSlice'

function Pause() {
  const dispatch = useDispatch()

  const handlePause = () => {
    dispatch(pauseGame())
  }

  const handleRestart = () => {
    dispatch(pauseGame())
    dispatch(nextRound())
  }

  const handleReset = () => {
    dispatch(pauseGame())
    dispatch(reset())
    dispatch(resetScore())
  }

  return (
    <div className='pause'>
      <div className='pause__container'>
        <p className='heading-lg'>Pause</p>
        <BigPill text={'Continue Game'} type={'menu'} action={handlePause} />
        <BigPill text={'Restart'} type={'menu'} action={handleRestart} />
        <BigPill
          text={'Quit Game'}
          type={'menu'}
          color={'salmon'}
          action={handleReset}
        />
      </div>
    </div>
  )
}

export default Pause
