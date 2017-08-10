import { combineReducers } from 'redux'
import * as types from '../constants/FishActionTypes'

const app = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fishes = (state = [], action) => {
  switch (action.type) {
    case types.ADD_FISH:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export const rootReducer = combineReducers({fishes, app})
