import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, foodByCategorySlice, foodSlice, modalSlice } from './';
export const store = configureStore({
    reducer: {
        food: foodSlice.reducer,
        foodByCategory: foodByCategorySlice.reducer,
        modal: modalSlice.reducer,
        favorite: favoriteSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})