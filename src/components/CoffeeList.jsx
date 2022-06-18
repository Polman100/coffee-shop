import React from 'react'
import coffees from './../data/coffees'

const CoffeeList = () => {
  return (
    <ul className='CoffeeList'>
        {coffees.map(({ id, name, weight, price, imgURL }) => (
             <li key={id}>
                <img src={imgURL} alt={`opakowanie ${name}`} />
                <p>{name} ({weight}g)</p>
                <p>{price} zł</p>
                <p><button>+koszyk</button></p>
            </li> 
        ))}
    </ul>
  ) ;
};

export default CoffeeList;