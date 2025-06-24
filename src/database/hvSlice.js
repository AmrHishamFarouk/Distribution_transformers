import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Voltages: [],
  Stephv: 0.0,
  Iphhv: 0.0,
  Ilinehv: 0.0,
  Iphhvpos7: 0.0,
  Ilinehvpos7: 0.0,
  Wiretypehv: 'foil',
  NumberOfWires: 1.0,
  δhv: 0.0,
  Wirethicknesshv: 0.0,
  Wirelengthhv: 0.0,
  WireInsulation: 0.0,
  WireR: 0.0,
  Csahv: 0.4,
  Turnlengthhv: 0.0,
  Turnthicknesshv: 0.0,
  Hmechhv: 0.0,
  Helechv: 0.0,
  Layershv: 0.0,
  Firstpackethv: 0.0,
  Secondpackethv: 0.0,
  Thirdpackethv: 0.0,
  Fourthpackethv: 0.0,
  Ghv: 0.0,
  Gimphv: 0.0,
  Insulationhv: 0.0,
  Thickradialhv: 0.0,
  Thickaxialhv: 0.0,
  Barshv: 0.0,
  Фexternalradialhv: 0.0,
  Фexternalaxialhv: 0.0,
  Dmeanhv: 0.0,
  Dmhv: 0.0,
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
    setHV: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

// Dynamic Selector
export const selectHV = (state, key) => state.hv[key];

// Action
export const { setHV } = hvSlice.actions;

// Reducer
export default hvSlice.reducer;
