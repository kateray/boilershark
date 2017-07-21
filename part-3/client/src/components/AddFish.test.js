import React from 'react'
import {mount} from 'enzyme'
import { AddFish } from './AddFish'

function setup () {
  const props = {
    addFish: jest.fn()
  }

  const wrapper = mount(<AddFish {...props} />)

  return {
    props,
    wrapper
  }
}

describe('components', () => {
  test('should render self', () => {
    const { wrapper } = setup()

    expect(wrapper.find('label').first().text()).toBe('Fish type:')
  })
  test('the fish name input field is set to state', () => {
    const { wrapper } = setup()
    // TODO very bad that this depends on the input's orders
    const values = ['', '5']
    wrapper.find('input').forEach((el, i) => {
      expect(el.node.value).toBe(values[i])
    })
  })
})
