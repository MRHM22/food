import React, { useEffect } from 'react'
import { useFoodStore } from '../../hooks/useFoodStore';
import { FoodList } from '../components/FoodList';

export const FoodPage = () => {

  const { loadingFoods} = useFoodStore();

  useEffect(() => {
    loadingFoods();
  });

  return (
    <FoodList />
  )
}
