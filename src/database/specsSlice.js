import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Ratedpower: 0.0,
  HV: 0,
  LV: 0.4,
  Po: 0.0,
  Pcc: 0.0,
  Z: 0.0,
  B: 0.0,
  F: 0.0,
  Δironcore: 0.0,
  Maj: 0.0,
  VT:0.0,
};

const specsSlice = createSlice({
  name: 'specs',
  initialState,
  reducers: {
    setSpec: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

// Selectors
export const selectSpec = (state, key) => state.specs[key];

// Actions
export const { setSpec } = specsSlice.actions;

// Reducer
export default specsSlice.reducer;

