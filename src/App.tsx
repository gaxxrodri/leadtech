import { useState } from 'react'
import { useDrinks } from './hoook/useDrinks'
import { useModal } from './hoook/useModal'
import { Card } from './components/Card/Card'
import Modal from './components/Modal/Modal'
import './App.css'
import { type IDrink } from './interfaces'

function App() {
  const { data: drinks, loading } = useDrinks()
  const [drinkSelected, setDrinkSelected] = useState<IDrink>({ image: '', name: '', id: '' })
  const { isOpen, handleCloseModal, handleOpenModal } = useModal()

  return (
    <>
      <div className='app_container'>
        {loading ? (
          <h1 style={{ margin: '0 auto' }}>Loading...</h1>
        ) : drinks?.length ? (
          drinks.map((drink: IDrink) => (
            <Card handleOpenModal={handleOpenModal} setDrinkSelected={setDrinkSelected} key={drink.id} drink={drink} />
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
      <Modal
        drinkSelected={drinkSelected}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        drinks={drinks}
        setDrinkSelected={setDrinkSelected}
      />
    </>
  )
}

export default App
