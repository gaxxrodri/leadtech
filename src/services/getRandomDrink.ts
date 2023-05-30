const URL_RANDOM_DRINK = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

export const getRandomDrink = async () => {
  const response = await fetch(URL_RANDOM_DRINK)
  if (!response.ok) {
    throw new Error('server side error')
  }
  const data = await response.json()
  return data.drinks
}
