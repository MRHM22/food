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
      
      <div className='container loading'>
      <ReactLoading className='text-center ' type={'spin'} color={'red'} height={50} width={75} />
        <p>Cargando...</p>
      </div>
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
