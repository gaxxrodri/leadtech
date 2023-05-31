import { type IDrinkResponse } from '../../interfaces'
import { transformDataToViewModel } from '../utils'

const dataMock: IDrinkResponse[] = [
  {
    idDrink: '14087',
    strDrink: 'Red Snapper',
    strDrinkThumb: 'https://example.com/drink1.jpg',
  },
  {
    idDrink: '12692',
    strDrink: 'Lassi Khara',
    strDrinkThumb: 'https://example.com/drink2.jpg',
  },
]

describe('Services util functions', () => {
  describe('transformDataToViewModel function', () => {

    test('should correctly transform the data', () => {
      const result = transformDataToViewModel(dataMock)

      expect(result).toEqual([
        { id: '14087', name: 'Red Snapper', image: 'https://example.com/drink1.jpg' },
        { id: '12692', name: 'Lassi Khara', image: 'https://example.com/drink2.jpg' },
      ])
    })

    test('should return an empty array when data is empty', () => {
      const emptyData: IDrinkResponse[] = []
      const result = transformDataToViewModel(emptyData)

      expect(result).toEqual([])
    })
  })
})
