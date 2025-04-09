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
export const selectRatedpower = (state) => state.specs.Ratedpower;
export const selectHV = (state) => state.specs.HV;
export const selectLV = (state) => state.specs.LV;
export const selectPo = (state) => state.specs.Po;
export const selectPcc = (state) => state.specs.Pcc;
export const selectZ = (state) => state.specs.Z;
export const selectB = (state) => state.specs.B;
export const selectF = (state) => state.specs.F;
export const selectΔironcore = (state) => state.specs.Δironcore;
export const selectMaj = (state) => state.specs.Maj;

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
  Maj,
} = specsSlice.actions;

// Reducer
export default specsSlice.reducer;
