//import { useDispatch } from 'react-redux'
//import { onLoadingFoodRandom } from '../store';
import { foodApi } from '../api/foodApi';
import { getFavoriteFood } from '../helpers/getFavoriteFood';

export const useFavoriteStore = () => {

    //const dispatch = useDispatch();
    
    const loadingFoodRandom = async() => {
        try{
            const {data} = await foodApi.get('/random.php');
           // console.log(data.meals);
            return await getFavoriteFood(data.meals);
            /*console.log(meal);
            //return meal;
            sessionStorage.setItem('f', meal);
            */
        }catch(error){
            console.log(error);
        }
    }

    const registerFoodRandom = async() => {
        try {
            /*const {data} = await foodApi.get('/random.php');
            console.log(data.meals);
            return data.meals;*/
            //dispatch(onRegisterFoodRandom(data.meals));
        }catch(error){
            console.error(error);
        }
    }

    return {
        loadingFoodRandom,
        registerFoodRandom,
        //toggleFavoriteModal
    }
}
