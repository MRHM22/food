import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState:{
        isModalOpen: false
    },
    reducers:{
        onModalOpen: (state) =>{
            state.isModalOpen = true;
        },
        onModalClose: (state) => {
            state.isModalOpen = false;
        }
    }
});

export const {
    onModalOpen,
    onModalClose
} = modalSlice.actions;
