import { Drink } from "../hoook/useDrinks"

const URL_RANDOM_DRINK = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

interface IApiResponse {
  drinks: Drink[]
}

export const getRandomDrink = async () => {
  try {
    const response = await fetch(URL_RANDOM_DRINK)
    if (!response.ok) {
      throw new Error('server side error')
    }
    const data: IApiResponse = await response.json()
    const { drinks } = data
    return drinks
  } catch (error) {
    throw new Error('client side error')
  }
}
