import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Iphhv: 0.0, // Float
  Wiretypehv: 'foil', // String
  δhv: 0.0, // Float
  Wirethicknesshv: 0.0, // Float
  ∆hv: 0.4, // Float
  Turnlengthhv: 0.0, // Float
  Turnthicknesshv: 0.0, // Float
  Hmechhv: 0.0,
  Helechv: 0.0,
  Layershv: 0.0,
  Firstpackethv: 0.0, // Float
  Secondpackethv: 0.0, // Float
  Thirdpackethv: 0.0, // Float
  Fourthpackethv: 0.0, // Float
  Ghv: 0.0, // Float
  Gimphv: 0.0, // Float
  Insulationhv: 0.0, // Float
  Thickradialhv: 0.0,
  Thickaxialhv: 0.0,
  Barshv: 0.0,
  Фexternalradialhv: 0.0,
  Фexternalaxialhv: 0.0,
  Dmeanhv: 0.0,
  Dmhv: 0.0, // Only one instance will be kept if duplicates appear.
  Coppermasshv: 0.0,
  Connectionhv: 0.0,
  Eddyhv: 0.0,
  Pcc75hv: 0.0,
  Pcc95hv: 0.0,
  Rph75hv: 0.0,
  Rph95hv: 0.0,
  Rbettwoterminalshv: 0.0,
  Rph20hv: 0.0,
};

const hvSlice = createSlice({
  name: 'hv',
  initialState,
  reducers: {
    setIphhv: (state, action) => {
      state.Iphhv = action.payload;
    },
    setWiretypehv: (state, action) => {
      state.Wiretypehv = action.payload;
    },
    setδhv: (state, action) => {
      state.δhv = action.payload;
    },
    setWirethicknesshv: (state, action) => {
      state.Wirethicknesshv = action.payload;
    },
    set∆hv: (state, action) => {
      state.∆hv = action.payload;
    },
    setTurnlengthhv: (state, action) => {
      state.Turnlengthhv = action.payload;
    },
    setTurnthicknesshv: (state, action) => {
      state.Turnthicknesshv = action.payload;
    },
    setHmechhv: (state, action) => {
      state.Hmechhv = action.payload;
    },
    setHelechv: (state, action) => {
      state.Helechv = action.payload;
    },
    setLayershv: (state, action) => {
      state.Layershv = action.payload;
    },
    setFirstpackethv: (state, action) => {
      state.Firstpackethv = action.payload;
    },
    setSecondpackethv: (state, action) => {
      state.Secondpackethv = action.payload;
    },
    setThirdpackethv: (state, action) => {
      state.Thirdpackethv = action.payload;
    },
    setFourthpackethv: (state, action) => {
      state.Fourthpackethv = action.payload;
    },
    setGhv: (state, action) => {
      state.Ghv = action.payload;
    },
    setGimphv: (state, action) => {
      state.Gimphv = action.payload;
    },
    setInsulationhv: (state, action) => {
      state.Insulationhv = action.payload;
    },
    setThickradialhv: (state, action) => {
      state.Thickradialhv = action.payload;
    },
    setThickaxialhv: (state, action) => {
      state.Thickaxialhv = action.payload;
    },
    setBarshv: (state, action) => {
      state.Barshv = action.payload;
    },
    setФexternalradiahv: (state, action) => {
      state.Фexternalradialhv = action.payload;
    },
    setФexternalaxialhv: (state, action) => {
      state.Фexternalaxialhv = action.payload;
    },
    setDmeanhv: (state, action) => {
      state.Dmeanhv = action.payload;
    },
    setDmhv: (state, action) => {
      state.Dmhv = action.payload;
    },
    setCoppermasshv: (state, action) => {
      state.Coppermasshv = action.payload;
    },
    setConnectionhv: (state, action) => {
      state.Connectionhv = action.payload;
    },
    setEddyhv: (state, action) => {
      state.Eddyhv = action.payload;
    },
    setPcc75hv: (state, action) => {
      state.Pcc75hv = action.payload;
    },
    setPcc95hv: (state, action) => {
      state.Pcc95hv = action.payload;
    },
    setRph75hv: (state, action) => {
      state.Rph75hv = action.payload;
    },
    setRph95hv: (state, action) => {
      state.Rph95hv = action.payload;
    },
    setRbettwoterminalshv: (state, action) => {
      state.Rbettwoterminalshv = action.payload;
    },
    setRph20hv: (state, action) => {
      state.Rph20hv = action.payload;
    },
  },
});

export const {
  setIphhv,
  setWiretypehv,
  setδhv,
  setWirethicknesshv,
  set∆hv,
  setTurnlengthhv,
  setTurnthicknesshv,
  setHmechhv,
  setHelechv,
  setLayershv,
  setFirstpackethv,
  setSecondpackethv,
  setThirdpackethv,
  setFourthpackethv,
  setGhv,
  setGimphv,
  setInsulationhv,
  setThickradialhv,
  setThickaxialhv,
  setBarshv,
  setФexternalradialhv,
  setФexternalaxialhv,
  setDmeanhv,
  setDmhv,
  setCoppermasshv,
  setConnectionhv,
  setEddyhv,
  setPcc75hv,
  setPcc95hv,
  setRph75hv,
  setRph95hv,
  setRbettwoterminalshv,
  setRph20hv,
} = hvSlice.actions;

export const selectIphhv = (state) => state.hv.Iphhv;
export const selectWiretypehv = (state) => state.hv.Wiretypehv;
export const selectδhv = (state) => state.hv.δhv;
// adjust
export const selectWirethicknesshv = (state) => state.hv.Wirethicknesshv;
export const select∆hv = (state) => state.hv.∆hv;
export const selectTurnlengthhv = (state) => state.hv.Turnlengthhv;
export const selectTurnthicknesshv = (state) => state.hv.Turnthicknesshv;
export const selectHmechhv = (state) => state.hv.Hmechhv;
export const selectHelechv = (state) => state.hv.Helechv;
export const selectLayershv = (state) => state.hv.Layershv;
export const selectFirstpackethv = (state) => state.hv.Firstpackethv;
export const selectSecondpackethv = (state) => state.hv.Secondpackethv;
export const selectThirdpackethv = (state) => state.hv.Thirdpackethv;
export const selectFourthpackethv = (state) => state.hv.Fourthpackethv;
export const selectGhv = (state) => state.hv.Ghv;
export const selectGimphv = (state) => state.hv.Gimphv;
export const selectInsulationhv = (state) => state.hv.Insulationhv;
export const selectThickradialhv = (state) => state.hv.Thickradialhv;
export const selectThickaxialhv = (state) => state.hv.Thickaxialhv;
export const selectBarshv = (state) => state.hv.Barshv;
export const selectФexternalradialhv = (state) => state.hv.Фexternalradialhv;
export const selectФexternalaxialhv = (state) => state.hv.Фexternalaxialhv;
export const selectDmeanhv = (state) => state.hv.Dmeanhv;
export const selectDmhv = (state) => state.hv.Dmhv;
export const selectCoppermasshv = (state) => state.hv.Coppermasshv;
export const selectConnectionhv = (state) => state.hv.Connectionhv;
export const selectEddyhv = (state) => state.hv.Eddyhv;
export const selectPcc75hv = (state) => state.hv.Pcc75hv;
export const selectPcc95hv = (state) => state.hv.Pcc95hv;
export const selectRph75hv = (state) => state.hv.Rph75hv;
export const selectRph95hv = (state) => state.hv.Rph95hv;
export const selectRbettwoterminalshv = (state) => state.hv.Rbettwoterminalshv;
export const selectRph20hv = (state) => state.hv.Rph20hv;
