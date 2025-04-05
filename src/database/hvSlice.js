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
export const selectWirethicknesslv = (state) => state.lv.Wirethicknesslv;
export const select∆lv = (state) => state.lv.∆lv;
export const selectTurnlengthlv = (state) => state.lv.Turnlengthlv;
export const selectTurnthicknesslv = (state) => state.lv.Turnthicknesslv;
export const selectHmechlv = (state) => state.lv.Hmechlv;
export const selectHeleclv = (state) => state.lv.Heleclv;
export const selectLayerslv = (state) => state.lv.Layerslv;
export const selectFirstpacketlv = (state) => state.lv.Firstpacketlv;
export const selectSecondpacketlv = (state) => state.lv.Secondpacketlv;
export const selectThirdpacketlv = (state) => state.lv.Thirdpacketlv;
export const selectFourthpacketlv = (state) => state.lv.Fourthpacketlv;
export const selectGlv = (state) => state.lv.Glv;
export const selectGimplv = (state) => state.lv.Gimplv;
export const selectInsulationlv = (state) => state.lv.Insulationlv;
export const selectThickradiallv = (state) => state.lv.Thickradiallv;
export const selectThickaxiallv = (state) => state.lv.Thickaxiallv;
export const selectBarslv = (state) => state.lv.Barslv;
export const selectФexternalradial = (state) => state.lv.Фexternalradial;
export const selectФexternalaxial = (state) => state.lv.Фexternalaxial;
export const selectDmeanlv = (state) => state.lv.Dmeanlv;
export const selectDmlv = (state) => state.lv.Dmlv;
export const selectCoppermass = (state) => state.lv.Coppermass;
export const selectConnectionlv = (state) => state.lv.Connectionlv;
export const selectEddylv = (state) => state.lv.Eddylv;
export const selectPcc75lv = (state) => state.lv.Pcc75lv;
export const selectPcc95lv = (state) => state.lv.Pcc95lv;
export const selectRph75lv = (state) => state.lv.Rph75lv;
export const selectRph95lv = (state) => state.lv.Rph95lv;
export const selectRbettwoterminalslv = (state) => state.lv.Rbettwoterminalslv;
export const selectRph20lv = (state) => state.lv.Rph20lv;
