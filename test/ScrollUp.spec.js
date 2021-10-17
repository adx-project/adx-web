import { mount } from '@vue/test-utils'
import ScrollUp from '@/components/ScrollUp.vue'

describe('ScrollUp', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ScrollUp)
    expect(wrapper.vm).toBeTruthy()
  })
})
