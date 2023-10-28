import React from 'react';


export const FoodByCategoryCard = ({idMeal,strMealThumb,strMeal}) => {

  return (
    <div className="row">
        <div className="col">
            <div id={idMeal} className="card border-secondary">
                <img src={strMealThumb} className="card-img-top" alt={strMeal}/>
                <div className="p-3">{strMeal}</div>
            </div>
        </div>
    </div>
  )
}