import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Board from './components/Board'
import Footer from './components/Footer'
import Header from './components/Header'
import Players from './components/Players'

import {
  reset,
  incrementPlayerOneScore,
  incrementPlayerTwoScore,
} from './features/playerSlice'

import PlayerVsCpu from './components/Buttons/PlayerVsCpu'
import PlayerVsPlayer from './components/Buttons/PlayerVsPlayer'
import Options from './components/Buttons/Options'
import Quit from './components/Buttons/Quit'
import HeaderBtn from './components/Buttons/HeaderBtn'
import Check from './components/Buttons/Check'

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
      <PlayerVsPlayer />
      <PlayerVsCpu />
      <Options text={'Rules'} />
      <Quit />
      <HeaderBtn text={'menu'} />
      <Check />
      {/* <h1>Connect Four!</h1>
      <h2>Family Fun!</h2>
      <p>Player 1: {playerOne.score}</p>
      <button onClick={handlePlayerOneScore}>Score!</button>
      <p>Player 2: {playerTwo.score}</p>
      <button onClick={handlePlayerTwoScore}>Score!</button>
      <button onClick={handleScoreReset}>Reset!</button> */}
    </div>
  )
}

export default App
