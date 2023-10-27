import { configureStore } from "@reduxjs/toolkit";
import { foodSlice } from './';
export const store = configureStore({
    reducer: {
        food: foodSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})