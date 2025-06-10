import { StringUtils } from '../app/2-Hooks'

describe('Hooks jest test suite', () => {
  let sut: StringUtils

  beforeAll(() => {
    console.log('>> beforeAll: Starting test suite')
  })

  afterAll(() => {
    console.log('>> afterAll: Finishing test suite')
  })

  beforeEach(() => {
    sut = new StringUtils()
    console.log('Setup')
  })

  afterEach(() => {
    console.log('Teardown')
  })

  it('Should return correct uppercase', () => {
    const actual = sut.toUpperCase('test')

    expect(actual).toBe('TEST')
    console.log('Doing Test')
  })
})
