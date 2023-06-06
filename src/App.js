import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import Board from './components/Board'
// import Footer from './components/Footer'
// import Header from './components/Header'

import {
  reset,
  incrementPlayerOneScore,
  incrementPlayerTwoScore,
} from './features/playerSlice'

// Component testing Remove later
import PlayerVsCpu from './components/Buttons/PlayerVsCpu'
import PlayerVsPlayer from './components/Buttons/PlayerVsPlayer'
import Options from './components/Buttons/Options'
import Quit from './components/Buttons/Quit'
import HeaderBtn from './components/Buttons/HeaderBtn'
import Check from './components/Buttons/Check'
import Player from './components/Player'

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
      {/* <PlayerVsPlayer />
      <PlayerVsCpu />
      <Options text={'Rules'} type={'start'} />
      <Quit />
      <HeaderBtn text={'menu'} />
      <Check /> */}
      <div>
        <Player player={1} />
        <button onClick={handlePlayerOneScore}>Score!</button>
      </div>
      <div>
        <Player player={2} />
        <button onClick={handlePlayerTwoScore}>Score!</button>
      </div>

      <button onClick={handleScoreReset}>Reset!</button>
    </div>
  )
}

export default App
