import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Board from './components/Board'
import Footer from './components/Footer'
import Header from './components/Header'
import Player from './components/Player'
import NewGame from './components/NewGame'
import Rules from './components/Rules'
import Pause from './components/Pause'

import { verticalWin } from './hooks/winChecker'

// import {
//   reset,
//   incrementPlayerOneScore,
//   incrementPlayerTwoScore,
// } from './features/playerSlice'

function App() {
  // const dispatch = useDispatch()

  // const { playerOne, playerTwo } = useSelector((state) => state.players)
  const { newGame, viewRules, pause, board } = useSelector(
    (state) => state.game
  )

  // const handlePlayerOneScore = () => {
  //   dispatch(incrementPlayerOneScore())
  // }

  // const handlePlayerTwoScore = () => {
  //   dispatch(incrementPlayerTwoScore())
  // }

  // const handleScoreReset = () => {
  //   dispatch(reset())
  // }

  useEffect(() => {
    console.log(verticalWin(board))
    // console.log(board[0][1])
  }, [])

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
      {newGame && <NewGame />}
      {viewRules && <Rules />}
      {pause && <Pause />}
      <Footer />
    </div>
  )
}

export default App
