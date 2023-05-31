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
    reset: (state) => initialState,
    incrementPlayerOneScore: (state) => {
      state.playerOne.score += 1
    },
    incrementPlayerTwoScore: (state) => {
      state.playerTwo.score += 1
    },
  },
})

export const { reset, incrementPlayerOneScore, incrementPlayerTwoScore } =
  playerSlice.actions
export default playerSlice.reducer
