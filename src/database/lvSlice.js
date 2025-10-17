import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Nph: 0.0,
  Iphlv: 0.0,
  Wiretypelv: 'foil',
  Wirealignmentlv:'vertically',
  NumberOfWires: 1,
  δlv: 0.0,
  Wirethicknesslv: 0.0,
  Wirelengthlv:0.0,
  WireInsulation: 0.5,
  WireR:0.5,
  Dinner:0.0,
  Douter:0.0,
  Csalv: 0.4,
  Turnlengthlv: 0.0,
  Turnthicknesslv: 0.0,
  TurnsPerLayer:1.0,
  Hmechlv: 0.0,
  Heleclv: 0.0,
  Hardboardlv:0.0,
  Xalv:0.0,
  Xblv:0.0,
  MinLayersPerPacketlv:0,
  Minpacketslv:0,
  Layerslv: 0.0,
  Firstpacketlv: 0.0,
  Secondpacketlv: 0.0,
  Thirdpacketlv: 0.0,
  Fourthpacketlv: 0.0,
  Layoutlv: [],
  Glv: 0.0,
  Gimplv: 0.0,
  Insulationlv: 0.0,
  InsulationPaperThicknesslv: 0.13,
  Nocollingductlv:0,
  Coolingductthickness:3.1,
  Noinslv:0.0,
  Фinternalradial: 0.0,
  Фinternalaxial: 0.0,
  Thickradiallv: 0.0,
  Thickaxiallv: 0.0,
  Barslv: 0.0,
  Barslengthlv:0.0,
  Фexternalradial: 0.0,
  Фexternalaxial: 0.0,
  Dmeanlv: 0.0,
  Dmlv: 0.0,
  Coppermasslv: 0.0,
  Connectionlv: 0.0,
  Eddylv: 0.0,
  Pcc75lv: 0.0,
  Pcc95lv: 0.0,
  Rph75lv: 0.0,
  Rph95lv: 0.0,
  Rbettwoterminalslv: 0.0,
  Rph20lv: 0.0,
  Rph20lvbettwoterminalslv: 0.0,
};


const lvSlice = createSlice({
  name: 'lv',
  initialState,
  reducers: {
    setLV: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

// Dynamic Selector
export const selectLV = (state, key) => state.lv[key];

// Action
export const { setLV } = lvSlice.actions;

// Reducer
export default lvSlice.reducer;