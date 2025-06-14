import { createSlice } from "@reduxjs/toolkit";
// const token = localStorage.getItem('token')

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true
            if (token) localStorage.setItem('token', token)
        },
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        removeUser: (state,) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false;
            localStorage.removeItem('token')
        }
    }
})
export const { loadUser, removeUser, setUser } = userSlice.actions;
export default userSlice.reducer;