import React from 'react'
import { useDispatch } from 'react-redux'

import PlayerVsPlayer from './Buttons/PlayerVsPlayer'
import BigPill from './Buttons/BigPill'

import Logo from '../assets/images/logo.svg'

import { rules } from '../features/gameSlice'

function NewGame() {
  const dispatch = useDispatch()

  const handleRules = () => {
    dispatch(rules())
  }

  return (
    <div className='new-game'>
      <div className='new-game__container'>
        <Logo />
        <div className='new-game__options'>
          <PlayerVsPlayer />
          <BigPill
            text={'Game Rules'}
            type={'menu'}
            color={'white'}
            action={handleRules}
          />
        </div>
      </div>
    </div>
  )
}

export default NewGame
