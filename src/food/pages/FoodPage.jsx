import React, { useEffect } from 'react'
import { useFoodStore } from '../../hooks/useFoodStore';
import { FoodList } from '../components/FoodList';
import { FoodHeader } from '../components/FoodHeader';
import ReactLoading from 'react-loading';

export const FoodPage = () => {

  const {isLoading, loadingFoods} = useFoodStore();

  useEffect(() => {
    
    loadingFoods();
  },[]);
    
  if(isLoading === 'Chequeando'){
    console.log(isLoading);
    return ( 
      <div className='container text-center'>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></div>
    )
  }
  return (
    <>
      <FoodHeader />
      &nbsp;
      {(isLoading === 'Cargado')?
      (<FoodList />)
      :
      ('')}
      
    </>
  )
}
