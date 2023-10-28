import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useFoodStore } from '../../hooks/useFoodStore';
import { FoodByCategoryList } from '../components/FoodByCategoryList';


export const FoodCategory = () => {
  const {strCategory} = useParams();
  const {loadingFoodByCategory} = useFoodStore();

  useEffect(() => {
    loadingFoodByCategory(strCategory); 
  });

  return (
    <FoodByCategoryList name={strCategory} />
  )
}
