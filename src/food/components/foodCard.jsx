

import React from 'react'
import { Link } from 'react-router-dom'

export const FoodCard = ({
    idCategory, strCategory, strCategoryThumb
}) => {
  return (
    <div className='' >
        <div className='row'> 
            <div className="col ">
                <div id={idCategory} className="card "  >
                    <img src={strCategoryThumb} className="card-img-top" alt={strCategory}/>
                    <h5 className="card-title">{strCategory}</h5>
                        
                        <Link to={`/foodCategory/${strCategory}`}>Ver comidas</Link>                     
                </div>   
            </div>
        </div>
    </div>
  )
}