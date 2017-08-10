import * as types from '../constants/FishActionTypes'

let nextFishId = 0
export const addFish = (payload) => {
  payload = Object.assign({id: nextFishId++}, payload)
  return {
    type: types.ADD_FISH,
    payload
  }
}
