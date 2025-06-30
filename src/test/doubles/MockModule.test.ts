jest.mock('../../app/doubles/Doubles', () => ({
  ...jest.requireActual('../../app/doubles/Doubles'),
  calculateComplexity: () => {
    return 10
  },
}))

jest.mock('uuid', () => ({
  v4: () => '123',
}))

import * as OtherUtils from '../../app/doubles/Doubles'

describe('module tests', () => {
  test('calculate complexity', () => {
    const result = OtherUtils.calculateComplexity({} as any)
    expect(result).toBe(10)
  })

  test('keep other functions', () => {
    const result = OtherUtils.toUpperCase('abc')
    expect(result).toBe('ABC')
  })

  test('string with id', () => {
    const result = OtherUtils.toLowerCaseWithId('ABC')
    expect(result).toBe('abc123')
  })
})
