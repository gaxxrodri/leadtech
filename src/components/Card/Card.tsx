import './Card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { type IDrink } from '../../interfaces'
interface CardProps {
  drink: IDrink
  setDrinkSelected: (drink: IDrink) => void
  handleOpenModal: () => void
}

export const Card: React.FC<CardProps> = ({ drink, setDrinkSelected, handleOpenModal }: CardProps) => {
  const { image, name, id } = drink

  const handleOnClick = () => {
    handleOpenModal()
    setDrinkSelected({ image, name, id })
  }
  return (
    <div className='card'>
      <LazyLoadImage width='100%' height='100%' src={image} alt={`Image from drink ${name}`} effect='blur' />
      <h4>{name}</h4>
      <button onClick={handleOnClick}>Like</button>
    </div>
  )
}
