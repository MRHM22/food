

import React from 'react'

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
                        <p class="card-text">Ver comidas</p>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}
/*
<Link to={ `./hero/${ id }` }>
                            Más...
                        </Link>
                        */