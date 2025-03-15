import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Apne reducer ka import karo

const store = configureStore({
    reducer: {
        auth: authReducer, // Ye ek valid reducer hona chahiye
    },
});

export default store;
