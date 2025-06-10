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

  // it.only('should return info for valid string', () => {
  //   const actual = getStringInfo('Testing')

  //   expect(actual.lowerCase).toBe('testing')
  //   expect(actual.extraInfo).toEqual({})

  //   expect(actual.characters.length).toBe(7)
  //   expect(actual.characters).toHaveLength(7)

  //   expect(actual.characters).toEqual(['T', 'e', 's', 't', 'i', 'n', 'g'])
  //   expect(actual.characters).toContain<string>('T')
  //   expect(actual.characters).toEqual(
  //     expect.arrayContaining(['t', 'i', 'n', 'g', 'T', 'e', 's'])
  //   )

  //   expect(actual.extraInfo).not.toBe(undefined)
  //   expect(actual.extraInfo).not.toBeUndefined()
  //   expect(actual.extraInfo).toBeDefined()
  //   expect(actual.extraInfo).toBeTruthy()
  // })

  describe('getStringInfo', () => {
    it('return right length', () => {
      const actual = getStringInfo('Testing')

      expect(actual.characters).toHaveLength(7)
    })

    it('return right lower case', () => {
      const actual = getStringInfo('Testing')

      expect(actual.lowerCase).toBe('testing')
    })

    it('return right uppercase', () => {
      const actual = getStringInfo('Testing')

      expect(actual.upperCase).toBe('TESTING')
    })

    it('return right characters', () => {
      const actual = getStringInfo('Testing')

      expect(actual.characters).toEqual(['T', 'e', 's', 't', 'i', 'n', 'g'])
      expect(actual.characters).toContain<string>('T')
      expect(actual.characters).toEqual(
        expect.arrayContaining(['t', 'i', 'n', 'g', 'T', 'e', 's'])
      )
    })

    it('return result with extraInfo property', () => {
      const actual = getStringInfo('Testing')

      expect(actual.extraInfo).toEqual({})
      expect(actual.extraInfo).not.toBe(undefined)
      expect(actual.extraInfo).not.toBeUndefined()
      expect(actual.extraInfo).toBeDefined()
      expect(actual.extraInfo).toBeTruthy()
    })
  })

  describe('should return right upparcase', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'test-ing', expected: 'TEST-ING' },
      { input: 'haha', expected: 'HAHA' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input)
      expect(actual).toBe(expected)
    })
  })
})
