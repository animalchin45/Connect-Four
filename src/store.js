import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// Import Reducers
import playerReducer from './features/playerSlice'

// Combine Reducers
const reducers = combineReducers({
  players: playerReducer,
})

// Configure Store
const store = configureStore({
  reducer: reducers,
})

export default store
