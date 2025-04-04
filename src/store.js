import { configureStore } from '@reduxjs/toolkit';
import specsSliceReducer from './database/specsSlice';
import lvSliceReducer from './database/lvSlice';

const store = configureStore({
    reducer: {
        specsSlice: specsSliceReducer,
        lvSlice: lvSliceReducer,
    },
});

export default store;
