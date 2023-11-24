import assert from 'assert'
import { validateEmail, validateIdCard } from '../src/index'

describe('validateEmail', () => {
  test('true', () => {
    assert.strictEqual(validateEmail('742222@11.com'), true)
  })
})


describe('validateIdCard', () => {
  test('true', () => {
    assert.strictEqual(validateIdCard('500228199409055000'), true)
  })
})

