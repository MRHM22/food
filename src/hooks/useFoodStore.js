

import { foodApi } from '../api/foodApi';
import { useDispatch } from 'react-redux';
import { onLoadingFood, onLoadingfoodByCategory } from '../store';
import { getRandomCategories } from '../helpers/getRandomCategories';

export const useFoodStore = () => {

    const dispatch = useDispatch();

    

    const loadingFoods = async()=>{

        try{
            const {data} = await foodApi.get('/categories.php');
            const categories = getRandomCategories(data.categories);
            dispatch( onLoadingFood(categories) );
        } catch(error){
            console.log(error);
        }
    }

    const loadingCategories = async()=> {
      try{
        const {data} = await foodApi.get('/categories.php');
        return data.categories;
      } catch(error){
          console.log(error);
      }
    }

    const loadingFoodByCategory = async(nameCategory) =>{
      try{
        const {data} = await foodApi.get(`/filter.php?c=${nameCategory}`);
        dispatch(onLoadingfoodByCategory(data.meals));
      }catch(error){
        console.log(error);
      }
    }

  return {
    
  //  foods,
    
    loadingFoods,
    loadingCategories,
    loadingFoodByCategory
  }
}
