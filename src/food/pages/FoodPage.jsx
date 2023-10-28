import React, { useEffect } from 'react'
import { useFoodStore } from '../../hooks/useFoodStore';
import { FoodList } from '../components/FoodList';
import { FoodHeader } from '../components/FoodHeader';

export const FoodPage = () => {

  const { loadingFoods} = useFoodStore();

  useEffect(() => {
    loadingFoods();
  });

  return (
    <>
      <FoodHeader />
      &nbsp;
      <FoodList />
    </>
  )
}
