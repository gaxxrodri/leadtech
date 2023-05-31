import { type IDrink } from '../../../interfaces'
import { getCurrentIndex } from '../utils'

describe('Modal util functions', () => {
  describe('getCurrentIndex function', () => {
    test('should return index 1', () => {
      const drinksMock: IDrink[] = [
        { image: 'url1', name: 'drink1', id: '1' },
        { image: 'url2', name: 'drink2', id: '2' },
        { image: 'url3', name: 'drink3', id: '3' },
      ]

      const selectedDrinkMock: IDrink = { image: 'url2', name: 'drink2', id: '2' }
      const result = getCurrentIndex(drinksMock, selectedDrinkMock)

      expect(result).toBe(1)
    })

    test('should return index -1', () => {
      const drinksMock: IDrink[] = [
        { image: 'url1', name: 'drink1', id: '1' },
        { image: 'url2', name: 'drink2', id: '2' },
        { image: 'url3', name: 'drink3', id: '3' },
      ]

      const selectedDrinkMock: IDrink = { image: 'url4', name: 'drink 4', id: '4' }
      const result = getCurrentIndex(drinksMock, selectedDrinkMock)

      expect(result).toBe(-1)
    })
  })
})
