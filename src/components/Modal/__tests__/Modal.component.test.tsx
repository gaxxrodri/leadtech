import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import sinon from 'sinon';
import { Drink } from '../../../hoook/useDrinks';
import Modal from '../Modal';

test('Modal component', () => {
  const handleCloseModal = sinon.spy();
  const setDrinkSelected = sinon.spy();
  
  const drinks: Drink[] = [
    { strDrinkThumb: "url1", strDrink: "drink1", idDrink: "1" },
    { strDrinkThumb: "url2", strDrink: "drink2", idDrink: "2" },
    { strDrinkThumb: "url3", strDrink: "drink3", idDrink: "3" },
  ];

  const selectedDrink: Drink = { strDrinkThumb: "url2", strDrink: "drink2", idDrink: "2" };
  
  const { getByText, getByRole } = render(
    <Modal
      isOpen={true}
      drinkSelected={selectedDrink}
      handleCloseModal={handleCloseModal}
      drinks={drinks}
      setDrinkSelected={setDrinkSelected}
    />
  );

  expect(getByText(selectedDrink.strDrink)).toBeInTheDocument();
  expect(getByRole('img')).toHaveAttribute('src', selectedDrink.strDrinkThumb);
});
