
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import {useModalStore} from '../../hooks/useModalStore';
import { useFavoriteStore } from '../../hooks/useFavoriteStore';
import axios from 'axios';
import { foodApi } from '../../api/foodApi';
import { getFavoriteFood } from '../../helpers/getFavoriteFood';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
let style ='btn btn-outline-warning btn-block';

export const FavoriteModal = () => {

    const {isModalOpen,closeFavoriteModal} = useModalStore();
    const { loadingFoodRandom } = useFavoriteStore();
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
            //registerFoodRandom();
            style='btn btn-outline-primary btn-block';
            //localStorage.setItem('favorite',1);
        } else {
            setValue('Guardar');
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
            <div className='container'>
                <h2 className='text-center'>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} className="card-img-top" />
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
