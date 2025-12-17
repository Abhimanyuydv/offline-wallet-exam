import { createSlice } from '@reduxjs/toolkit';
import { clearAuth } from './secureStorage';

type AuthState = {
    token: string | null;
    expiresAt: number | null;
    isBootstrapping: boolean;
};

const initialState: AuthState = {
    token: null,
    expiresAt: null,
    isBootstrapping: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        restoreAuth: (state, action) => {
            state.token = action.payload.token;
            state.expiresAt = action.payload.expiresAt;
        },
        logout: state => {
            state.token = null;
            state.expiresAt = null;
            clearAuth();
        },
        finishBootstrap: state => {
            state.isBootstrapping = false;
        },
    },
});

export const { restoreAuth, logout, finishBootstrap } = authSlice.actions;
export default authSlice.reducer;
