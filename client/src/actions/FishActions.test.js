import * as actions from './FishActions'
import * as types from '../constants/FishActionTypes'

describe('fish actions', () => {
  it('should create an action to add a fish', () => {
    const name = 'salmon'
    const rating = '7'
    const expectedAction = {
      type: types.ADD_FISH,
      payload: {
        name: name,
        rating: rating,
        id: 0
      }
    }
    expect(actions.addFish({name: name, rating: rating})).toEqual(expectedAction)
  })
})
