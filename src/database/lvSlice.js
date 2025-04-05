import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Iphlv: 0.0, // Float
  Wiretypelv: 'foil', // String
  δlv: 0.0, // Float
  Wirethicknesslv: 0.0, // Float
  ∆lv: 0.4, // Float
  Turnlengthlv: 0.0, // Float
  Turnthicknesslv: 0.0, // Float
  Hmechlv: 0.0,
  Heleclv: 0.0,
  Layerslv: 0.0,
  Firstpacketlv: 0.0, // Float
  Secondpacketlv: 0.0, // Float
  Thirdpacketlv: 0.0, // Float
  Fourthpacketlv: 0.0, // Float
  Glv: 0.0, // Float
  Gimplv: 0.0, // Float
  Insulationlv: 0.0, // Float
  Thickradiallv: 0.0,
  Thickaxiallv: 0.0,
  Barslv: 0.0,
  Фexternalradial: 0.0,
  Фexternalaxial: 0.0,
  Dmeanlv: 0.0,
  Dmlv: 0.0, // Only one instance will be kept if duplicates appear.
  Coppermass: 0.0,
  Connectionlv: 0.0,
  Eddylv: 0.0,
  Pcc75lv: 0.0,
  Pcc95lv: 0.0,
  Rph75lv: 0.0,
  Rph95lv: 0.0,
  Rbettwoterminalslv: 0.0,
  Rph20lv: 0.0,
};

const lvSlice = createSlice({
  name: 'lv',
  initialState,
  reducers: {
    setIphlv: (state, action) => {
      state.Iphlv = action.payload;
    },
    setWiretypelv: (state, action) => {
      state.Wiretypelv = action.payload;
    },
    setδlv: (state, action) => {
      state.δlv = action.payload;
    },
    setWirethicknesslv: (state, action) => {
      state.Wirethicknesslv = action.payload;
    },
    set∆lv: (state, action) => {
      state.∆lv = action.payload;
    },
    setTurnlengthlv: (state, action) => {
      state.Turnlengthlv = action.payload;
    },
    setTurnthicknesslv: (state, action) => {
      state.Turnthicknesslv = action.payload;
    },
    setHmechlv: (state, action) => {
      state.Hmechlv = action.payload;
    },
    setHeleclv: (state, action) => {
      state.Heleclv = action.payload;
    },
    setLayerslv: (state, action) => {
      state.Layerslv = action.payload;
    },
    setFirstpacketlv: (state, action) => {
      state.Firstpacketlv = action.payload;
    },
    setSecondpacketlv: (state, action) => {
      state.Secondpacketlv = action.payload;
    },
    setThirdpacketlv: (state, action) => {
      state.Thirdpacketlv = action.payload;
    },
    setFourthpacketlv: (state, action) => {
      state.Fourthpacketlv = action.payload;
    },
    setGlv: (state, action) => {
      state.Glv = action.payload;
    },
    setGimplv: (state, action) => {
      state.Gimplv = action.payload;
    },
    setInsulationlv: (state, action) => {
      state.Insulationlv = action.payload;
    },
    setThickradiallv: (state, action) => {
      state.Thickradiallv = action.payload;
    },
    setThickaxiallv: (state, action) => {
      state.Thickaxiallv = action.payload;
    },
    setBarslv: (state, action) => {
      state.Barslv = action.payload;
    },
    setФexternalradial: (state, action) => {
      state.Фexternalradial = action.payload;
    },
    setФexternalaxial: (state, action) => {
      state.Фexternalaxial = action.payload;
    },
    setDmeanlv: (state, action) => {
      state.Dmeanlv = action.payload;
    },
    setDmlv: (state, action) => {
      state.Dmlv = action.payload;
    },
    setCoppermass: (state, action) => {
      state.Coppermass = action.payload;
    },
    setConnectionlv: (state, action) => {
      state.Connectionlv = action.payload;
    },
    setEddylv: (state, action) => {
      state.Eddylv = action.payload;
    },
    setPcc75lv: (state, action) => {
      state.Pcc75lv = action.payload;
    },
    setPcc95lv: (state, action) => {
      state.Pcc95lv = action.payload;
    },
    setRph75lv: (state, action) => {
      state.Rph75lv = action.payload;
    },
    setRph95lv: (state, action) => {
      state.Rph95lv = action.payload;
    },
    setRbettwoterminalslv: (state, action) => {
      state.Rbettwoterminalslv = action.payload;
    },
    setRph20lv: (state, action) => {
      state.Rph20lv = action.payload;
    },
  },
});

export const {
  setIphlv,
  setWiretypelv,
  setδlv,
  setWirethicknesslv,
  set∆lv,
  setTurnlengthlv,
  setTurnthicknesslv,
  setHmechlv,
  setHeleclv,
  setLayerslv,
  setFirstpacketlv,
  setSecondpacketlv,
  setThirdpacketlv,
  setFourthpacketlv,
  setGlv,
  setGimplv,
  setInsulationlv,
  setThickradiallv,
  setThickaxiallv,
  setBarslv,
  setФexternalradial,
  setФexternalaxial,
  setDmeanlv,
  setDmlv,
  setCoppermass,
  setConnectionlv,
  setEddylv,
  setPcc75lv,
  setPcc95lv,
  setRph75lv,
  setRph95lv,
  setRbettwoterminalslv,
  setRph20lv,
} = lvSlice.actions;

export default lvSlice.reducer;
