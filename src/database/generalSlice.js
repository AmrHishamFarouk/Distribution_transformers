//general variables
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
  Rbettwoterminalslv: 0.0,
  Rph20lv: 0.0,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setGeneral: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

// Dynamic Selector
export const selectGeneral = (state, key) => state.lv[key];

// Action
export const { setGeneral } = generalSlice.actions;

// Reducer
export default generalSlice.reducer;
