import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
    name:'food',
    initialState:{
        isLoading: true,
        foods:[],
        activeFood: null
    },
    reducers: {
        onLoadingFood:(state, {payload})=>{
            state.isLoading = false;
            state.foods = payload;
        }
    }
});

export const {
    onLoadingFood
} = foodSlice.actions;