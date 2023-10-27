import { configureStore } from "@reduxjs/toolkit";
import { foodByCategorySlice, foodSlice } from './';
export const store = configureStore({
    reducer: {
        food: foodSlice.reducer,
        foodByCategory: foodByCategorySlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})