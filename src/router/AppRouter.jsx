
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FavoriteFoodPage } from '../food/pages/FavoriteFoodPage'
import { FoodPage } from '../food/pages/FoodPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <FoodPage /> } />
        <Route path='/inicio' element={ <FoodPage /> } /> 
        <Route path='/favorite' element={ <FavoriteFoodPage /> } />    
        
    </Routes>
  )
}
//<Route path='/food/pages' element={ <FavoriteFoodPage />} />