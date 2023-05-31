import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
    <div>
      <h1>Connect Four!</h1>
      <h2>Family Fun!</h2>
      <p>Player 1: {playerOne.score}</p>
      <button onClick={handlePlayerOneScore}>Score!</button>
      <p>Player 2: {playerTwo.score}</p>
      <button onClick={handlePlayerTwoScore}>Score!</button>
      <button onClick={handleScoreReset}>Reset!</button>
    </div>
  )
}

export default App
