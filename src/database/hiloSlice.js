import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Canallvhilo: 0.0, // Float
  Psphilo: 0.0,
  Canalhvhilo: 0.0, // Float
  Thickhilo: 0.0,
  Radialexternalhilo: 0.0, // Float
  Axialexternalhilo: 0.4, // Float
  Dmeanhilo: 0.0, // Float
  Dmhilo: 0.0, // Float
};

const lvSlice = createSlice({
  name: 'hilo',
  initialState,
  reducers: {
    setCanallvhilo: (state, action) => {
      state.Canallvhilo = action.payload;
    },
    setPsphilo: (state, action) => {
      state.Psphilo = action.payload;
    },
    setCanalhvhilo: (state, action) => {
      state.Canalhvhilo = action.payload;
    },
    setThickhilo: (state, action) => {
      state.Thickhilo = action.payload;
    },
    setRadialexternalhilo: (state, action) => {
      state.Radialexternalhilo = action.payload;
    },
    setAxialexternalhilo: (state, action) => {
      state.Axialexternalhilo = action.payload;
    },
    setDmeanhilo: (state, action) => {
      state.Dmeanhilo = action.payload;
    },
    setDmhilo: (state, action) => {
      state.Dmhilo = action.payload;
    },
  },
});

export const {
  setCanallvhilo,
  setPsphilo,
  setCanalhvhilo,
  setRadialexternalhilo,
  setAxialexternalhilo,
  setDmeanhilo,
  setDmhilo,
  setThickhilo,
} = hiloSlice.actions;

export const selectCanallvhilo = (state) => state.hilo.Canallvhilo;
export const selectPsphilo = (state) => state.hilo.Psphilo;
export const selectCanalhvhilo = (state) => state.hilo.Canalhvhilo;
export const selectThickhilo = (state) => state.hilo.Thickhilo;
export const selectRadialexternalhilo = (state) =>
  state.hilo.Radialexternalhilo;
export const selectAxialexternalhilo = (state) => state.hilo.Axialexternalhilo;
export const selectDmeanhilo = (state) => state.hilo.Dmeanhilo;
export const selectDmhilo = (state) => state.hilo.Dmhilo;
