

import { foodApi } from '../api/foodApi';
import { useDispatch, useSelector } from 'react-redux';
import { onLoadingFood, onLoadingfoodByCategory,onChecking } from '../store';
import { getRandomCategories } from '../helpers/getRandomCategories';

export const useFoodStore = () => {

    const dispatch = useDispatch();

    const {isLoading} = useSelector(state=>state.food);

    const loadingFoods = async()=>{
        dispatch(onChecking());
        try{
            const {data} = await foodApi.get('/categories.php');
            const categories = getRandomCategories(data.categories);
            setTimeout(()=>{dispatch( onLoadingFood(categories) );},2000);
            
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
    isLoading,
  //  foods,
    
    loadingFoods,
    loadingCategories,
    loadingFoodByCategory
  }
}
