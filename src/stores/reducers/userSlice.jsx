import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../config/Axiosonfig';

// Thunks
export const loginUser = createAsyncThunk('/user/login', async (FormData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/user/login', FormData);
        // Return the whole user object, not just user property
        return res.data.user;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
});

export const registerUser = createAsyncThunk('/user/register', async (FormData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/user/register', FormData);
        // Return the whole user object, not just user property
        return res.data.user;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
});

export const logoutUser = createAsyncThunk('/user/logout', async (_, { rejectWithValue }) => {
    try {
        await axios.get('/user/logout');
        return true;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
});

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload || null;
                state.isAuthenticated = !!action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = action.payload || 'Login failed';
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload || null;
                state.isAuthenticated = !!action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = action.payload || 'Registration failed';
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Logout failed';
            });
    }
});

export default userSlice.reducer;