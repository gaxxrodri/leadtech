export interface IDrinkResponse {
  strDrinkThumb: string
  strDrink: string
  idDrink: string
  [key: string]: string
}

export interface IApiResponse {
  drinks: IDrinkResponse[]
}

export interface IDrink {
  id: string
  name: string
  image: string
}
