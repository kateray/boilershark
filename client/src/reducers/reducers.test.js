import {rootReducer} from './index'
import * as types from '../constants/FishActionTypes'

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(
      {app: {}, fishes: []}
    )
  })

  it('should handle ADD_FISH', () => {
    expect(
      rootReducer({}, {
        type: types.ADD_FISH,
        payload: {id: 1, name: 'tuna', rating: '6'}
      })
    ).toEqual({
      app: {},
      fishes: [{id: 1, name: 'tuna', rating: '6'}]
    })
  })
})
