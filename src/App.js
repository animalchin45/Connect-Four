import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Board from './components/Board'
import Footer from './components/Footer'
import Header from './components/Header'
import Player from './components/Player'

import {
  reset,
  incrementPlayerOneScore,
  incrementPlayerTwoScore,
} from './features/playerSlice'

function App() {
  const dispatch = useDispatch()

  const { playerOne, playerTwo } = useSelector((state) => state.players)

  const handlePlayerOneScore = () => {
    dispatch(incrementPlayerOneScore())
  }

  const handlePlayerTwoScore = () => {
    dispatch(incrementPlayerTwoScore())
  }

  const handleScoreReset = () => {
    dispatch(reset())
  }

  return (
    <div className='layout'>
      <Header />
      <div className='player--left'>
        <Player player={1} />
      </div>
      <Board />
      <div className='player--right'>
        <Player player={2} />
      </div>
      <Footer />
    </div>
  )
}

export default App
