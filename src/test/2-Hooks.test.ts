import { StringUtils } from '../app/2-Hooks'

fdescribe('Hooks jest test suite', () => {
  let sut: StringUtils

  // beforeAll(() => {
  //   console.log('>> beforeAll: Starting test suite')
  // })

  // afterAll(() => {
  //   console.log('>> afterAll: Finishing test suite')
  // })

  beforeEach(() => {
    sut = new StringUtils()
    console.log('Setup')
  })

  afterEach(() => {
    console.log('Teardown')
  })

  fit('Should return correct uppercase', () => {
    const actual = sut.toUpperCase('test')

    expect(actual).toBe('TEST')
    console.log('Doing Test')
  })

  it('Should throw error - Function', () => {
    function expectError() {
      sut.toUpperCase('')
    }

    expect(expectError).toThrow('Invalid arguments!')
    // deprecated
    // expect(expectError).toThrowError()
  })

  it('Should throw error - Arrow', () => {
    expect(() => {
      sut.toUpperCase('')
    }).toThrow('Invalid arguments!')
  })

  it('Should throw error - Try Catch', (done) => {
    try {
      sut.toUpperCase('')
      done('GetStringInfo should throw error for invalid arg!')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Invalid arguments!')
      done()
    }
  })
})
