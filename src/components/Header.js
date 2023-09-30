import React from 'react'
import { useDispatch } from 'react-redux'

import SmallPill from './Buttons/SmallPill'

import Logo from '../assets/images/logo.svg'

import { nextRound, pauseGame } from '../features/gameSlice'

function Header() {
  const dispatch = useDispatch()

  const handlePause = () => {
    dispatch(pauseGame())
  }

  const handleRestart = () => {
    dispatch(nextRound())
  }

  return (
    <div className='header'>
      <SmallPill text={'menu'} action={handlePause} />
      <Logo />
      <SmallPill text={'restart'} action={handleRestart} />
    </div>
  )
}

export default Header
