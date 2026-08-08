import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import RecipientRow from '../RecipientRow.vue'

const recipient = {
  id: 1,
  name: 'John Smith',
  email: 'john@example.com',
  company: 'ABC Company',
  status: 'Active',
}

describe('RecipientRow', () => {
  it('displays recipient information', () => {
    const wrapper = mount(RecipientRow, {
      props: {
        recipient,
        selected: false,
      },
    })

    expect(wrapper.text()).toContain('John Smith')
    expect(wrapper.text()).toContain('john@example.com')
    expect(wrapper.text()).toContain('ABC Company')
    expect(wrapper.text()).toContain('Active')
  })

  it('emits edit event when Edit is clicked', async () => {
    const wrapper = mount(RecipientRow, {
      props: {
        recipient,
        selected: false,
      },
    })

    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')

    expect(wrapper.emitted('edit')).toBeTruthy()
  })
})
