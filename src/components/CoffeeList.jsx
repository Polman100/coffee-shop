import { nanoid } from 'nanoid';
import React from 'react'
import coffees from './../data/coffees'
import CoffeeItem from './CoffeeItem';

const CoffeeList = () => {

  const addToBasketFn = (e) => {
    e.preventDefault();

    const {numberOfItems} = e.currentTarget.elements

    const newBasketItem = {
      id: nanoid(),
      name: "Coffee",
      numberOfItems: Number(numberOfItems.value),
    }

    console.log(newBasketItem);

  };

  return (
    <ul className='CoffeeList'>
        {coffees.map((coffee) => (
          <CoffeeItem
          key={coffee.id}
          data={coffee}
          addToBasketFn={addToBasketFn}
          // itemNumberGotChangedFn={(e) => console.log(e.target.value)}
          // basketGotClickedFn={() => console.log("basket got clicked")}
          />
        ))}
    </ul>
  ) ;
};

export default CoffeeList;