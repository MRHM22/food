
import React from 'react'
import { FoodCard } from './foodCard';
import { useSelector } from 'react-redux';

export const FoodList = () => {
   
    const {foods} = useSelector(state => state.food);

    return (
        <div className='container text-center'>
            <div className='card-columns'>
            {
                foods.map( (food) =>
                    //(food!==undefined)?
                    ( 
                        <FoodCard key={food.idCategory} {...food}/>
                    )//:''
                )    
            }
            </div>
        </div>
  )
}
