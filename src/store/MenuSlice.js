import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        mobileMenu: false
    },
    reducers: {
        handleChange: (e) => {
            e.mobileMenu = !e.mobileMenu
        },
    }
})

export const { handleChange } = menuSlice.actions;
export default menuSlice.reducer;