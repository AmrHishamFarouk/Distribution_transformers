//general variables
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Hcoil:0.0,
  Rbettwoterminalslv: 0.0,
  Rph20lv: 0.0,
  Csacore: 0.0,
  CoreAreanet:0.0,
  W1: 0.0,
  W2: 0.0,
  W3: 0.0,
  W4: 0.0,
  L1: 0.0,
  L2: 0.0,
  L3: 0.0,
  L4: 0.0,
  Totalstacking: 0.0,
  CoreAspectRatio: 0.0,
  Ew:0.0,
  Hw:0.0,
  massironcorenet:0.0,
  massironcoregross:0.0,
  //iron core losses
  massironcorenet:0.0,  
  massironcoregross:0.0,     
  Po:0.0,    
  Iomax:0.0,  
  Io:0.0,  
  //general
  Sticks:6.0,
  Cyl:1.0,
  Tums:0.13,
  Inssteel:6.0,
  //impedance and short circuit
  Ux: 0.0, 
  Ucc:0.0, 
  voltagedrop08:0.0,
  voltagedropunity:0.0,
  voltagelv08:0.0,
  Tsclv:0.0,
  Tschv:0.0,
  Tsc:0.0,
  tempcoillv:0.0,
  tempcoilhv:0.0,
  //forces
  Isc:0.0,
  Ec:0.0,
  d:0.0,
  Fd:0.0,
  σcttotal:0.0,      
  σftlv:0.0,
  σexhv:0.0,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setGeneral: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

// Dynamic Selector
export const selectGeneral = (state, key) => state.general[key];
// Action
export const { setGeneral } = generalSlice.actions;

// Reducer
export default generalSlice.reducer;
