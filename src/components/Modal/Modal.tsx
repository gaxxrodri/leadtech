import { Drink } from '../../hoook/useDrinks'
import './Modal.css'
import { getCurrentIndex } from './utils'

interface ModalProps {
  isOpen: boolean
  drinkSelected: Drink
  handleCloseModal: () => void
  drinks: Drink[]
  setDrinkSelected: (drink: Drink) => void
}

const Modal = ({ isOpen, drinkSelected, handleCloseModal, drinks, setDrinkSelected}: ModalProps) => {
  if (!isOpen) {
    return null
  }


  const currentIndex = getCurrentIndex(drinks, drinkSelected);
  const isLastDrink = currentIndex === drinks.length - 1;
  const isFirstDrink = currentIndex === 0;


  const handleNext = () => {
    if (isLastDrink) {
        return;
    }
    const nextDrink = drinks[currentIndex + 1];
    setDrinkSelected(nextDrink);
  }
  
  const handlePrev = () => {
    if (isFirstDrink) {
        return;
    }
    const prevDrink = drinks[currentIndex - 1];
    setDrinkSelected(prevDrink);
  }

  return (
    <div className='modal'>
      <div
        className='modal__content'
        onClick={e => {
          e.stopPropagation()
        }}
      >
         <div className="modal__card">
            <div className='modal__header'>
              <h4 className='modal__text'>
                  {drinkSelected.strDrink}
              </h4>
              <button onClick={handleCloseModal} className='modal__close_button'>X</button>
            </div>
            <img className='modal__image' src={drinkSelected.strDrinkThumb}>
            </img>
            <div className='modal_footer'>
              <button disabled={isFirstDrink} onClick={handlePrev} className='modal__navigate_button'> Previous drink</button>
              <button disabled={isLastDrink} onClick={handleNext} className='modal__navigate_button'> Next drink</button>
            </div>
        </div>

        </div>
      </div>
  )
}

export default Modal
