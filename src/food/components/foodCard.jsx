

import React from 'react'
import { Link } from 'react-router-dom'

export const FoodCard = ({
    idCategory, strCategory, strCategoryThumb
}) => {
  return (
    <div className='' >
        <div className='row'> 
            <div class="col">
                <div id={idCategory} class="card border-secondary" style={ { maxWidth: 250 } } >
                    <img src={strCategoryThumb} class="card-img-top" alt={strCategory}/>
                    <div class="card-body">
                        <h5 class="card-title">{strCategory}</h5>                     
                    </div>
                    <div class="card-body">
                        <Link to={`/foodCategory/${strCategory}`}>Ver comidas</Link>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}