import React from 'react'
import { concatList, modifiedVideo } from '../../helpers/getFavoriteFood'
import { useFavoriteStore } from '../../hooks/useFavoriteStore';

export const FavoriteCard = (meal) => {

    const { deleteFoodRandom } = useFavoriteStore();
    const onDeletedFavorite = (event,{idMeal}) =>{
        event.preventDefault();
        deleteFoodRandom(idMeal);
    }

  return (
    <div>
        <h5 className="accordion-header">
            <li className='list-group-item collapsed btn btn-outline-primary'  type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${meal.idMeal}`} aria-expanded="false" >
                {meal.strMeal}
            </li>
        </h5>
        <div id={`flush-collapse${meal.idMeal}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
                <div className="row">
                    <div className="col-10 text-center">
                    <h4>Categoria: {meal.strCategory}</h4>
                    <p>País: {meal.strArea}</p>
                    
                    </div>
                    <div className="col-1 col-sm-1">
                    <button type='button' className='btn btn-danger' onClick={deleteFoodRandom(meal.idMeal)} >Eliminar</button>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-4">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
                    </div>
                    <div className="col-6">
                        
                            {
                                (meal.strYoutube &&
                                <iframe className="card-img-top" title={meal.strMeal}
                                src={modifiedVideo(meal.strYoutube) }>
                                </iframe> )
                            }
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <h4 className='text-danger'>Ingredientes</h4>
                        <p className='text-justify'>
                            {
                                //concatList(meal.ingredients, meal.measure)
                                concatList(meal.ingredients, meal.measure).map((elem)=>(
                                    <li className='list-group-item'>
                                        {elem}
                                    </li>
                                ))
                            }
                        </p>
                    </div>
                    <div className="col-8">
                    <h4 className='text-primary'>Instrucciones</h4>
                        <p className='text-justify'>
                            {meal.strInstructions}
                        </p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    </div>
  )
}
