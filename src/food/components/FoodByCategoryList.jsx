import React from 'react'

import { FoodByCategoryCard } from './FoodByCategoryCard';
import { useSelector } from 'react-redux';

export const FoodByCategoryList = ({name}) => {
    const {foodByCategory} = useSelector(state=>state.foodByCategory);

  return (
    <div className='container text-center'>
        <h3>{name}</h3>
        <div className='card-columns'>
        {
            foodByCategory.map((ByCate)=>(
                <FoodByCategoryCard key={ByCate.idMeal} {...ByCate} />
            ))
        }
        </div>
    </div>
  )
}
