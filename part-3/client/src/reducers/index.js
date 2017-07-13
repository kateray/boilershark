import { combineReducers } from 'redux'
import * as FishActions from '../actions/FishActions'

const app = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fishes = (state = [], action) => {
  switch (action.type) {
    case FishActions.ADD_FISH:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export const rootReducer = combineReducers({fishes, app})
