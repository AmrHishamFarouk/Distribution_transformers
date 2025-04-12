import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Ratedpower: 0.0, // Float
  HV: 0, // kV
  LV: 0.4, // kV
  Po: 0.0, // Float
  Pcc: 0.0, // Float
  Z: 0.0, // Float
  B: 0.0, // Float
  F: 0.0, // Float
  Δironcore: 0.0,
  Maj:0.0,
};

const specsSlice = createSlice({
  name: 'specs',
  initialState,
  reducers: {
    setRatedpower: (state, action) => {
      state.Ratedpower = action.payload;
    },
    setHV: (state, action) => {
      state.HV = action.payload;
    },
    setLV: (state, action) => {
      state.LV = action.payload;
    },
    setPo: (state, action) => {
      state.Po = action.payload;
    },
    setPcc: (state, action) => {
      state.Pcc = action.payload;
    },
    setZ: (state, action) => {
      state.Z = action.payload;
    },
    setB: (state, action) => {
      state.B = action.payload;
    },
    setF: (state, action) => {
      state.F = action.payload;
    },
    setΔironcore: (state, action) => {
      state.Δironcore = action.payload;
    },
    setMaj: (state, action) => {
      state.Maj = action.payload;
    },
  },
});

// Selectors
export const selectRatedpower = (state) => state.specsSlice.Ratedpower;
export const selectHV = (state) => state.specsSlice.HV;
export const selectLV = (state) => state.specsSlice.LV;
export const selectPo = (state) => state.specsSlice.Po;
export const selectPcc = (state) => state.specsSlice.Pcc;
export const selectZ = (state) => state.specsSlice.Z;
export const selectB = (state) => state.specsSlice.B;
export const selectF = (state) => state.specsSlice.F;
export const selectΔironcore = (state) => state.specsSlice.Δironcore;
export const selectMaj = (state) => state.specsSlice.Maj;

// Actions
export const {
  setRatedpower,
  setHV,
  setLV,
  setPo,
  setPcc,
  setZ,
  setB,
  setF,
  setΔironcore,
  setMaj,
} = specsSlice.actions;

// Reducer
export default specsSlice.reducer;
