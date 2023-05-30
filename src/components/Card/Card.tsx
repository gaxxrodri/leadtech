import { type Drink } from '../../hoook/useDrinks'
import './Card.css'

interface CardProps {
  image: string
  title: string
  id: string
  setDrinkSelected: (drink: Drink) => void
  handleOpenModal: () => void
}

export const Card = ({ image, title, id, setDrinkSelected, handleOpenModal }: CardProps) => {
  const handleOnClick = () => {
    handleOpenModal()
    setDrinkSelected({ strDrinkThumb: image, strDrink: title, idDrink: id })
  }
  return (
    <div className='card'>
      <img src={image} alt={`Image from drink ${title}` } ></img>
      <h4>{title}</h4>
      <button onClick={handleOnClick}>Like</button>
    </div>
  )
}
