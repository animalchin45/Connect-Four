import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  turn: 1,
  pause: false,
  winner: 0,
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
    declareWinner: (state, action) => {
      state.winner = action.payload
    },
  },
})

export const { reset, nextTurn } = gameSlice.actions
export default gameSlice.reducer
