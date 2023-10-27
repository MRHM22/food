

import { foodApi } from '../api/foodApi';
import { useDispatch, useSelector } from 'react-redux';
import { onLoadingFood } from '../store';

export const useFoodStore = () => {

    const dispatch = useDispatch();

    const {foods} = useSelector(state => state.food);

    const loadingFoods = async()=>{

        try{
            const {data} = await foodApi.get('/categories.php');
            //console.log(data.categories);
            console.log(foods.length);
            dispatch( onLoadingFood(data.categories) );
        } catch(error){
            console.log(error);
        }
    }
  return {
    
    foods,
    
    loadingFoods
  }
}
