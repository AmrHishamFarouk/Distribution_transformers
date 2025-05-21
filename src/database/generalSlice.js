//general variables
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
  Rbettwoterminalslv: 0.0,
  Rph20lv: 0.0,
  Csacore:0.0,
  W1:0.0,
  W2:0.0,
  W3:0.0,
  W4:0.0,
  L1:0.0,
  L2:0.0,
  L3:0.0,
  L4:0.0,
  Totalstacking:0.0,
  CoreAspectRatio:0.0,
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
