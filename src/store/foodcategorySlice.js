import { createSlice } from "@reduxjs/toolkit";

export const foodByCategorySlice = createSlice({
    name:'foodByCategory',
    initialState:{
        foodByCategory:[]
    },
    reducers: {
        onLoadingfoodByCategory:(state, {payload})=>{
            state.foodByCategory = payload;
        }
    }
});

export const {
    onLoadingfoodByCategory
} = foodByCategorySlice.actions;