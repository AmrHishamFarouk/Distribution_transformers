import { configureStore } from '@reduxjs/toolkit';
import specsReducer from './database/specsSlice'; // Import the reducer from your slice
import lvReducer from './database/lvSlice'; // Import the reducer from your slice
import hvReducer from './database/hvSlice'; // Import the reducer from your slice
import hilosReducer from './database/hiloSlice'; // Import the reducer from your slice
import generalsReducer from './database/generalSlice'; // Import the reducer from your slice

const store = configureStore({
  reducer: {
    specs: specsReducer, // Register the specs slice reducer
    lv: lvReducer, // Register the specs slice reducer
    hv: hvReducer, // Register the specs slice reducer
    hilo: hilosReducer, // Register the specs slice reducer
    general: generalsReducer, // Register the specs slice reducer
  },
});

export default store;
