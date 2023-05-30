import { type Drink } from '../../hoook/useDrinks'
import './Card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'


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
      <LazyLoadImage 
        width='100%'
        height='100%'
        src={image}
        alt={`Image from drink ${title}`} 
        effect='blur'/>
      <h4>{title}</h4>
      <button onClick={handleOnClick}>Like</button>
    </div>
  )
}
