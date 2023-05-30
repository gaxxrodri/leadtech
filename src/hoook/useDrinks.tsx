import { useEffect, useState } from "react"

const URL_RANDOM_DRINK = `https://www.thecocktaildb.com/api/json/v1/1/random.php`


export interface Drink {
  strDrinkThumb: string;
  strDrink: string;
  idDrink: string;
}

export const useDrinks = () => {
  const [data, setData] = useState<Drink[]>([])
  const [loading, setLoading]= useState<boolean>(false)

  useEffect(() => {
    const getDrinks = async () => {
      setLoading(true)
      let drinksArray: Drink[] = []
      try {
        for (let i = 0; i < 3; i++) {
          const response = await fetch(URL_RANDOM_DRINK)
          if(!response.ok) {
            throw new Error ('server side error')
          }
          const data = await response.json()
          const {drinks} =  data
          drinksArray = [...drinksArray, ...drinks]
        }
        setData(drinksArray)
      } catch (error) {
        throw new Error ('Error en la petición')
      } finally {
        setLoading(false)
      }
    }
    getDrinks()
  }, [])

  return {data, loading}
}
