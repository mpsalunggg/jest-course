import { DataBase } from '../../../app/server_app/data/DataBase'
import * as IdGenerator from '../../../app/server_app/data/IdGenerator'

type TypeWithId = {
  id: string
  name: string
  color: string
}

describe('Database test suite', () => {
  let sut: DataBase<TypeWithId>

  const fakeId: string = '1234'
  const exampleData = {
    id: '',
    name: 'testing1',
    color: 'blue',
  }

  const exampleData2 = {
    id: '',
    name: 'testing2',
    color: 'blue',
  }

  beforeEach(() => {
    sut = new DataBase<TypeWithId>()
    jest.spyOn(IdGenerator, 'generateRandomId').mockReturnValue(fakeId)
  })

  it('Should return id after insert', async () => {
    const actual = await sut.insert({
      id: '',
    } as any)

    expect(actual).toBe(fakeId)
  })

  it('Should get element after insert', async () => {
    const id = await sut.insert(exampleData)
    const actual = await sut.getBy('id', id)

    expect(actual).toBe(exampleData)
  })

  it('Should find all elements with the same property', async () => {
    await sut.insert(exampleData)
    await sut.insert(exampleData2)

    const expexted = [exampleData, exampleData2]

    const actual = await sut.findAllBy('color', 'blue')
    expect(actual).toEqual(expexted)
  })

  it('Should change color on object', async () => {
    const id = await sut.insert(exampleData)
    const expectedColor = 'red'

    await sut.update(id, 'color', expectedColor)
    const object = await sut.getBy('id', id)
    const actualColor = object.color

    expect(actualColor).toBe(expectedColor)
  })

  it('Should delete object', async () => {
    const id = await sut.insert(exampleData)
    await sut.delete(id)

    const actual = await sut.getBy('id', id)
    expect(actual).toBeUndefined()
  })

  it('Should get all elements', async () => {
    await sut.insert(exampleData)
    await sut.insert(exampleData2)

    const expexted = [exampleData, exampleData2]

    const actual = await sut.getAllElements()

    expect(actual).toEqual(expexted)
  })
})
