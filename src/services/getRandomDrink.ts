import { type IApiResponse, type IDrink } from '../interfaces'
import { transformDataToViewModel } from './utils'

const URL_RANDOM_DRINK = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

export const getRandomDrink = async (): Promise<IDrink[]> => {
  try {
    const response: Response = await fetch(URL_RANDOM_DRINK)
    if (!response.ok) {
      throw new Error('server side error')
    }
    const data: IApiResponse = await response.json()
    const { drinks } = data
    const drinkToViewModel: IDrink[] = transformDataToViewModel(drinks)
    return drinkToViewModel
  } catch (error) {
    throw new Error('client side error')
  }
}
