import { describe, expect, it } from 'vitest'
import { recipientFilter } from '../recipientFilters'

const recipients = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    company: 'ABC Company',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    company: 'XYZ Company',
    status: 'Inactive',
  },
]

describe('recipientFilter', () => {
  it('filters recipients by name', () => {
    const result = recipientFilter(recipients, 'John')

    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('John Smith')
  })

  it('filters recipients by email', () => {
    const result = recipientFilter(recipients, 'sarah@example.com')

    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('Sarah Wilson')
  })

  it('returns all recipients when search is empty', () => {
    const result = recipientFilter(recipients, '')

    expect(result).toHaveLength(2)
  })
})
