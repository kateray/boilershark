const PREFIX = 'fishActions'

let nextFishId = 0
export const ADD_FISH = `${PREFIX}.ADD_FISH`
export const addFish = (payload) => {
  payload = Object.assign({id: nextFishId++}, payload)
  return {
    type: ADD_FISH,
    payload
  }
}
