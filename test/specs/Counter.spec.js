import { mount  } from '@vue/test-utils'
import Counter from '../../src/Counter.vue'

describe('dd', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Counter)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
