
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import {useModalStore} from '../../hooks/useModalStore';
import { useFavoriteStore } from '../../hooks/useFavoriteStore';
import { foodApi } from '../../api/foodApi';
import { concatList, getFavoriteFood, modifiedVideo } from '../../helpers/getFavoriteFood';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      overflow: 'scroll',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
let style ='btn btn-outline-warning btn-block';

export const FavoriteModal = () => {

    const {isModalOpen,closeFavoriteModal} = useModalStore();
    const { registerFoodRandom,deleteFoodRandom } = useFavoriteStore();
    const [value, setValue] = useState('Guardar');
    
    const [meal, setMeal] = useState(null);

  useEffect(() => {

    //axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    foodApi.get('/random.php')
    .then((response)=> setMeal(getFavoriteFood(response.data.meals)) );

 }, []);
      

    //const a = getFavoriteFood(meal);
    //console.log(meal);
    

    const onCloseModal = () => {
        closeFavoriteModal();
        setValue('Guardar');
        style='btn btn-outline-warning btn-block';
        foodApi.get('/random.php')
    .then((response)=> setMeal(getFavoriteFood(response.data.meals)) );
    }
    
    //const favorite = localStorage.getItem('favorite');
    
    //console.log(favorite);
    const changeNameButton = (event)=>{
        event.preventDefault();
        //const favorite = localStorage.getItem('favorite');
        if(value ==='Guardar') {
            setValue('Quitar')
            registerFoodRandom(meal);
            style='btn btn-outline-primary btn-block';
            //localStorage.setItem('favorite',1);
        } else {
            setValue('Guardar');
            //console.log(meal);
            deleteFoodRandom(meal.idMeal);
            style='btn btn-outline-warning btn-block';
            //localStorage.setItem('favorite',null);
        }
    }

    return (
        <> {meal &&(  
    <Modal isOpen={isModalOpen}
        onRequestClose={onCloseModal}       
        style={customStyles}
        className='modal'
        overlayClassName="modal-fondo"
        closeTimeoutMS={200} >
            <div id={meal.idMeal} className='container'>
                <h3 className='text-center'>{meal.strMeal}</h3>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
                        </div>
                        <div className='col'>
                            <h4>Categoria: {meal.strCategory}</h4>
                            <p>País: {meal.strArea}</p>
                            {
                                (meal.strYoutube &&
                                <iframe width="280" height="210" title={meal.strMeal}
                                src={modifiedVideo(meal.strYoutube) }>
                                </iframe> )
                            }
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                        <h4 className='text-danger'>Ingredientes</h4>
                        <p className='text-justify'>
                            {
                                concatList(meal.ingredients, meal.measure)
                               /* concatList(meal.ingredients, meal.measure).map((elem)=>(
                                    <li className='list-group-item'>
                                        {elem}
                                    </li>
                                ))*/
                            }
                        </p>
                        <h4 className='text-primary'>Instrucciones</h4>
                        <p className='text-justify'>
                            {meal.strInstructions}
                        </p>
                        </div>
                    </div>
                </div>
                &nbsp;
                <button
                    onClick={changeNameButton} 
                     className={style}
                >
                <i className="far fa-star"></i>
                <span> {value} en favoritos</span>
            </button>
            </div>

    </Modal>)}
    </>
  )
}
