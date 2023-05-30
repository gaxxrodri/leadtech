import { Drink } from "../../../hoook/useDrinks";
import { getCurrentIndex } from "../utils";


describe('Modal util functions', () => {
    describe('getCurrentIndex function', () => {
        test('should retorn index 1', () => {
          const drinksMock: Drink[] = [
            { strDrinkThumb: "url1", strDrink: "drink1", idDrink: "1" },
            { strDrinkThumb: "url2", strDrink: "drink2", idDrink: "2" },
            { strDrinkThumb: "url3", strDrink: "drink3", idDrink: "3" },
          ];
        
          const selectedDrinkMock: Drink = { strDrinkThumb: "url2", strDrink: "drink2", idDrink: "2" };
          const result = getCurrentIndex(drinksMock, selectedDrinkMock)

          expect(result).toBe(1);
        });

        test('should retorn index -1', () => {
          const drinksMock: Drink[] = [
            { strDrinkThumb: "url1", strDrink: "drink1", idDrink: "1" },
            { strDrinkThumb: "url2", strDrink: "drink2", idDrink: "2" },
            { strDrinkThumb: "url3", strDrink: "drink3", idDrink: "3" },
          ];
        
          const selectedDrinkMock: Drink = { strDrinkThumb: "url4", strDrink: "drink 4", idDrink: "4" };
          const result = getCurrentIndex(drinksMock, selectedDrinkMock)

          expect(result).toBe(-1);
        });
    })
})
