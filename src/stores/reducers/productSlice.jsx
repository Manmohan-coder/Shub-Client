import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadProduct: (state, action) => {
            state.products = action.payload.users;
            state.token = action.payload.token;
            state.isAuthenticated = true
            localStorage.setItem('token', action.payload.token)
        },
        setProduct: (state, action) => {
            state.products = action.payload.users
            state.isAuthenticated = true
        },
        removeProduct: (state,) => {
            state.products = null
            state.token = null
            localStorage.removeItem('token')
        }
    }
})
export default productSlice.reducer;
export const { loadProduct, removeProduct, setProduct } = productSlice.actions;