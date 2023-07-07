import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// Import Reducers
import playerReducer from './features/playerSlice'
import gameReducer from './features/gameSlice'

// Combine Reducers
const reducers = combineReducers({
  players: playerReducer,
  game: gameReducer,
})

// Configure Store
const store = configureStore({
  reducer: reducers,
})

export default store
