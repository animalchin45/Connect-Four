import React from 'react'
import { useSelector } from 'react-redux'

import Board from './components/Board'
import Footer from './components/Footer'
import Header from './components/Header'
import Player from './components/Player'
import NewGame from './components/NewGame'
import Rules from './components/Rules'
import Pause from './components/Pause'

function App() {
  const { newGame, viewRules, pause } = useSelector((state) => state.game)

  return (
    <div className='layout'>
      <Header />
      <div className='player--left'>
        <Player player={1} />
      </div>
      {!newGame && !viewRules && <Board />}
      <div className='player--right'>
        <Player player={2} />
      </div>
      {newGame && <NewGame />}
      {viewRules && <Rules />}
      {pause && <Pause />}
      {!newGame && !viewRules && <Footer />}
    </div>
  )
}

export default App
