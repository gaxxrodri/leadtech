import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import sinon from 'sinon'
import Modal from '../Modal'
import { type IDrink } from '../../../interfaces'

describe('Modal component test', () => {
  test('should render de Modal component correctly', () => {
    const handleCloseModal = sinon.spy()
    const setDrinkSelected = sinon.spy()

    const drinks: IDrink[] = [
      { image: 'url1', name: 'drink1', id: '1' },
      { image: 'url2', name: 'drink2', id: '2' },
      { image: 'url3', name: 'drink3', id: '3' },
    ]

    const selectedDrink: IDrink = { image: 'url2', name: 'drink2', id: '2' }

    const { getByText, getByRole } = render(
      <Modal
        isOpen={true}
        drinkSelected={selectedDrink}
        handleCloseModal={handleCloseModal}
        drinks={drinks}
        setDrinkSelected={setDrinkSelected}
      />
    )

    expect(getByText(selectedDrink.name)).toBeInTheDocument()
    expect(getByRole('img')).toHaveAttribute('src', selectedDrink.image)
  })
})
