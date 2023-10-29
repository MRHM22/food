import { useDispatch } from 'react-redux'
import { onRegisterFoodRandom } from '../store';
import { foodApi } from '../api/foodApi';

export const useFavoriteStore = () => {

    const dispatch = useDispatch();
     
    const registerFoodRandom = async() => {
        try {
            const {data} = await foodApi.get('/random.php');
            console.log(data.meals);
            return data.meals;
            //dispatch(onRegisterFoodRandom(data.meals));
        }catch(error){
            console.error(error);
        }
    }
    /*const toggleFavoriteModal =()=>{
        (isModalOpen) ? openFavoriteModal() : closeFavoriteModal();
    }*/
  
    return {
        registerFoodRandom,
        //toggleFavoriteModal
    }
}
