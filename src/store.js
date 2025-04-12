import { configureStore } from '@reduxjs/toolkit';
import specsSliceReducer from './database/specsSlice';

const store = configureStore({
    reducer: {
        specsSlice: specsSliceReducer,
    },
});

export default store;
