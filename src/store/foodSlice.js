import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
    name:'food',
    initialState:{
        isLoading: 'Chequeando',
        foods:[],
    },
    reducers: {
        onChecking:(state)=>{
            state.isLoading= 'Chequeando';
        },
        onLoadingFood:(state, {payload})=>{
            state.isLoading = 'Cargado';
            state.foods = payload;
        }
    }
});

export const {
    onChecking,
    onLoadingFood
} = foodSlice.actions;