import { combineReducers } from 'redux'

const app = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fishes = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({fishes, app})
