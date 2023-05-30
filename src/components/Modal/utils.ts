import { Drink } from "../../hoook/useDrinks";

export const getCurrentIndex = (drinks: Drink[], drinkSelected: Drink): number => {
    const currentIndex = drinks.findIndex(drink => drink.idDrink === drinkSelected.idDrink);
    return currentIndex
  }