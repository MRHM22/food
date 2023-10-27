
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FavoriteFoodPage } from '../food/pages/FavoriteFoodPage'
import { FoodPage } from '../food/pages/FoodPage'
import { CategoriesPages } from '../food/pages/CategoriesPages'
import { FoodCategory } from '../food/pages/FoodCategory'

export const AppRouter = () => {
  return (
    <Routes>
        <Route exact path='/' element={ <FoodPage /> } />
        <Route exact path='/inicio' element={ <FoodPage /> } /> 
        <Route path='/favorite' element={ <FavoriteFoodPage /> } />    
        <Route path='/categories' element={ <CategoriesPages /> } />
        <Route exact path='/foodCategory/:strCategory' element={ <FoodCategory /> } />
    </Routes>
  )
}
//<Route path='/food/pages' element={ <FavoriteFoodPage />} />