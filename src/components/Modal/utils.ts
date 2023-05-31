import { type IDrink } from '../../interfaces'

export const getCurrentIndex = (drinks: IDrink[], drinkSelected: IDrink): number => {
  const currentIndex = drinks.findIndex(drink => drink.id === drinkSelected.id)
  return currentIndex
}
