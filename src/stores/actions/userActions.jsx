import { toast } from "react-toastify";
import { loadUser, removeUser } from "../reducers/userSlice";
import instance from './../../config/Axiosonfig';

// Check if user is already logged in
export const checkAuthStatus = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            // Add token to axios headers
            instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const res = await instance.get('/user/profile');
            dispatch(loadUser({ user: res.data.user, token }));
        } catch (error) {
            localStorage.removeItem('token');
            delete instance.defaults.headers.common['Authorization'];
            console.error("Error checking auth status:", error);
        }
    }
};

export const asyncLoginUser = (user) => async (dispatch) => {
    try {
        const res = await instance.post('/user/login', user, {
            withCredentials: true
        });
        const { token, user: userData } = res.data;
        if (token) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            dispatch(loadUser({ user: userData, token }));
            toast.success("Successfully logged in!");
        } else {
            toast.error("Token not Found.");
        }
    } catch (err) {
        const errorMsg = extractErrorMessage(err);
        toast.error(errorMsg);
    }
}

export const asyncRegisterUser = (user) => async (dispatch) => {
    try {
        const res = await instance.post('/user/register', user, {
            withCredentials: true
        });
        const { token, user: userData } = res.data;
        if (token) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            dispatch(loadUser({ user: userData, token }));
            toast.success("Successfully registered!");
        } else {
            toast.error("Token not found after registration.");
        }
    } catch (err) {
        const errorMsg = extractErrorMessage(err);
        toast.error(errorMsg);
    }
}

// ✅ Logout User
export const asyncLogoutUser = () => async (dispatch) => {
    try {
        await instance.post('/user/logout');
        delete instance.defaults.headers.common['Authorization'];
        dispatch(removeUser());
        toast.success("Successfully logged out!");
    } catch (err) {
        const errorMsg = extractErrorMessage(err);
        toast.error(errorMsg);
    }
};

const extractErrorMessage = (err) => {
    if (err.response?.data?.message) {
        return err.response.data.message;
    } else if (err.response?.data?.errors) {
        return err.response.data.errors.map(e => e.msg).join('\n');
    } else {
        return "Something went wrong. Please try again.";
    }
};

// ✅ Load Current User from Token/Cookie
// export const asyncCurrentUser = () => async (dispatch) => {
//     try {
//         const res = await instance.get('/user/me', { withCredentials: true });
//         const { user } = res.data;
//         dispatch(loadUser({ users: user }));
//     } catch (error) {
//         console.error("Error loading current user", error);
//     }
// };