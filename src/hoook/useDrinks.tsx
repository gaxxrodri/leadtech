import { useEffect, useState } from 'react'
import { getRandomDrink } from '../services/getRandomDrink'
import { type IDrink } from '../interfaces'

interface IUseDrinks {
  data: IDrink[]
  loading: boolean
}

export const useDrinks = (): IUseDrinks => {
  const [data, setData] = useState<IDrink[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getDrinks = async () => {
      setLoading(true)
      try {
        const drinksPromises: Array<Promise<IDrink[]>> = Array.from({ length: 3 }, getRandomDrink)
        const drinksArray = await Promise.all(drinksPromises)
        setData(drinksArray.flat())
      } catch (error) {
        throw new Error('Error while fetching data')
      } finally {
        setLoading(false)
      }
    }
    getDrinks()
  }, [])

  return { data, loading }
}
