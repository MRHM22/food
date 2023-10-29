import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name:'favorite',
    initialState: {
        favorite: []
    },
    reducers: {
        onRegisterFoodRandom: (state, {payload}) =>{
            state.favorite.push(payload);
        }
    }
});

export const {
    onRegisterFoodRandom,
} = favoriteSlice.actions;