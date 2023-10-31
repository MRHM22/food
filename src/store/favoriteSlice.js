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
        onRegisterFoodRandom: (state, {payload=[]}) =>{
            const exist = state.favorite.some(data => data.idMeal === payload.idMeal);
            if(!exist){
                state.favorite.push(payload);}
        },
        onDeleteFoodRandom: (state, {payload})=>{
            console.log(payload)
            state.favorite=state.favorite.filter(data =>data.idMeal !== payload);
        }
    }
});

export const {
    onDeleteFoodRandom,
    onLoadingFoodRandom,
    onRegisterFoodRandom,
} = favoriteSlice.actions;