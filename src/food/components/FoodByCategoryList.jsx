import React from 'react'

import { FoodByCategoryCard } from './FoodByCategoryCard';
import { useSelector } from 'react-redux';

export const FoodByCategoryList = () => {
    const {foodByCategory} = useSelector(state=>state.foodByCategory);
 // console.log(foodByCategory);
  return (
    <div className='container text-center'>
        {
            foodByCategory.map((ByCate)=>{
                //console.log(ByCate);
                <FoodByCategoryCard {...ByCate} />
            })
        }
    </div>
  )
}
