import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerOne: {
    score: 0,
  },
  playerTwo: {
    score: 0,
  },
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    resetScore: (state) => initialState,
    incrementPlayerScore: (state, action) => {
      if (action.payload === 1) {
        state.playerOne.score += 1
      } else {
        state.playerTwo.score += 1
      }
    },
  },
})

export const { resetScore, incrementPlayerScore } = playerSlice.actions
export default playerSlice.reducer
