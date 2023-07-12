import React from 'react'
import { useDispatch } from 'react-redux'

import SmallPill from './Buttons/SmallPill'

import Logo from '../assets/images/logo.svg'

import { reset, pauseGame } from '../features/gameSlice'

function Header() {
  const dispatch = useDispatch()

  const handlePause = () => {
    dispatch(pauseGame())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  // Restart buttons should reset current game?

  return (
    <div className='header'>
      <SmallPill text={'menu'} action={handlePause} />
      <Logo />
      <SmallPill text={'restart'} action={handleReset} />
    </div>
  )
}

export default Header
