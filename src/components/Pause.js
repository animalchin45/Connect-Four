import React from 'react'
import { useDispatch } from 'react-redux'

import BigPill from './Buttons/BigPill'

import { reset, pauseGame } from '../features/gameSlice'

function Pause() {
  const dispatch = useDispatch()

  const handlePause = () => {
    dispatch(pauseGame())
  }

  const handleReset = () => {
    dispatch(pauseGame())
    dispatch(reset())
  }

  return (
    <div className='pause'>
      <div className='pause__container'>
        <p className='heading-lg'>Pause</p>
        <BigPill text={'Continue Game'} type={'menu'} action={handlePause} />
        <BigPill text={'Restart'} type={'menu'} action={handleReset} />
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
