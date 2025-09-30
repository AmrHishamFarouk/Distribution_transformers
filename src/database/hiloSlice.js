import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Canallvhilo: 0.0,
  Psphilo: 0.0,
  Canalhvhilo: 0.0,
  Thickhilo: 8.5,
  Radialexternalhilo: 0.0,
  Axialexternalhilo: 0.4,
  Dmeanhilo: 0.0,
  Dmhilo: 0.0,
  Rodshilo:20.0,
};

const hiloSlice = createSlice({
  name: 'hilo',
  initialState,
  reducers: {
    setHilo: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

// Dynamic Selector
export const selectHilo = (state, key) => state.hilo[key];

// Action
export const { setHilo } = hiloSlice.actions;

// Reducer
export default hiloSlice.reducer;
