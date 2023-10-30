import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name:'favorite',
    initialState: {
        favorite: []
    },
    reducers: {
        onLoadingFoodRandom: (state, {payload}) =>{
            state.favorite =payload;
        },
        onRegisterFoodRandom: (state, {payload}) =>{
            state.favorite.push(payload);
        }
    }
});

export const {
    onLoadingFoodRandom,
    onRegisterFoodRandom,
} = favoriteSlice.actions;