
import React from 'react'
import { useFoodStore } from '../../hooks/useFoodStore';
import { FoodCard } from './foodCard';

export const FoodList = () => {

    const {foods} = useFoodStore();
  
    return (
        <div className='container text-center'>
            <div className='card-columns'>
            {
                foods.map( food =>(
                    <FoodCard key={food.idCategory} {...food}/>
                    )
                )    
            }
            </div>
        </div>
  )
}
