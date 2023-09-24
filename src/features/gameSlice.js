import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  turn: 1,
  newGame: false,
  viewRules: false,
  pause: false,
  winner: 0,
  board: [
    [null, null, null, 1, 2, 1],
    [null, null, null, null, null, 2],
    [null, null, null, null, 2, 1],
    [null, null, null, null, null, 1],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: (state) => initialState,
    nextTurn: (state) => {
      if (state.turn === 1) {
        state.turn = 2
      } else {
        state.turn = 1
      }
    },
    startGame: (state) => {
      state.newGame = !state.newGame
    },
    rules: (state) => {
      state.viewRules = !state.viewRules
    },
    pauseGame: (state) => {
      state.pause = !state.pause
    },
    declareWinner: (state, action) => {
      state.winner = action.payload
    },
  },
})

export const { reset, nextTurn, startGame, rules, pauseGame, declareWinner } =
  gameSlice.actions
export default gameSlice.reducer
