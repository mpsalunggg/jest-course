import { getStringInfo, toUpperCase } from '../app/Utils'

describe('Utils test suite', () => {
  it('str should return uppercase', () => {
    // const result = toUpperCase('test')
    // expect(result).toBe('TEST')

    // arrange:
    const sut = toUpperCase
    const expected = 'ABC'

    // act:
    const actual = sut('abc')

    // assert:
    expect(actual).toBe(expected)
  })

  it.only('should return info for valid string', () => {
    const actual = getStringInfo('Testing')

    expect(actual.lowerCase).toBe('testing')
    expect(actual.extraInfo).toEqual({})

    expect(actual.characters.length).toBe(7)
    expect(actual.characters).toHaveLength(7)

    expect(actual.characters).toEqual(['T', 'e', 's', 't', 'i', 'n', 'g'])
    expect(actual.characters).toContain<string>('T')
    expect(actual.characters).toEqual(
      expect.arrayContaining(['t', 'i', 'n', 'g', 'T', 'e', 's'])
    )

    expect(actual.extraInfo).not.toBe(undefined)
    expect(actual.extraInfo).not.toBeUndefined()
    expect(actual.extraInfo).toBeDefined()
    expect(actual.extraInfo).toBeTruthy()
  })
})
