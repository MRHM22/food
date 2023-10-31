import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FavoriteCard } from '../components/FavoriteCard';

export const FavoriteFoodPage = () => {

  const foodFavorite = useSelector(state => state.favorite);
  /*const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    if(foodFavorite.favorite){
      alert('Aun no tienes guardado ninguna comida');
    }
   // setFavorites(foodFavorite.favorite);
  });*/
  
  

  

  return (
    <div className="container">
      <h2>Favoritos</h2>
    {
        (foodFavorite.favorite &&
          <>
          <div className="accordion accordion-flush" >

            <div className="accordion-item list-group">
              {
                foodFavorite.favorite.map((meal) => (
                  <FavoriteCard {...meal} />
                ))
              }
            </div>
            </div>

          </>
        )
    }
    </div>
  )
}
