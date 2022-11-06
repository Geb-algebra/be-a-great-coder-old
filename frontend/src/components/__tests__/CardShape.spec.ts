import { describe, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CardShape from '../CardShape.vue'

describe('CardShape', () => {
  test('renders properly', () => {
    const wrapper = mount(CardShape, { 
      slots: {default: 'Inner Content'}
    })
    expect(wrapper.text()).toContain('Inner Content')
  })
  test('clickable', () => {
    const wrapper = mount(CardShape, {
      props: {clickable: true},
      slots: {default: 'Inner Content'}
    })
    wrapper.find('.card').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('nonclickable', () => {
    const wrapper = mount(CardShape, {
      props: {clickable: false}
    })
    wrapper.find('.card').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
})
