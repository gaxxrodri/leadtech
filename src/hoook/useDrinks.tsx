import { useEffect, useState } from 'react'
import { getRandomDrink } from '../services/getRandomDrink'

export interface Drink {
  strDrinkThumb: string
  strDrink: string
  idDrink: string
}

interface IUseDrinks {
  data: Drink[]
  loading: boolean
}

export const useDrinks = (): IUseDrinks => {
  const [data, setData] = useState<Drink[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getDrinks = async () => {
      setLoading(true)
      try {
        const drinksPromises = Array.from({length: 3}, getRandomDrink);
        const drinksArray = await Promise.all(drinksPromises)
        setData(drinksArray.flat())
      } catch (error) {
        throw new Error('Error en la petición')
      } finally {
        setLoading(false)
      }
    }
    getDrinks()
  }, [])

  return { data, loading }
}
