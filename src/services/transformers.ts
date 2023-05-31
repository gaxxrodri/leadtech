import { type IDrink, type IDrinkResponse } from '../interfaces'

export const transformDataToViewModel = (data: IDrinkResponse[]): IDrink[] => {
  if (data.length === 0) return []

  return data.map((drink: IDrinkResponse) => ({
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb
  }))
}
