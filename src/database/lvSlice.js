import { createSlice } from '@reduxjs/toolkit';

const lvSlice = createSlice({
    name: 'lv',
    initialState: {
        //-----------------------------------donot forget to put lv after each variable name-----------------------------------
        Nph: 0.0, // Float
        Wiretype: 'foil', // String
        Ratedpower: 0.0, // Float
        HV: 0, // Float
        LV: 0.4, // Float
        Po: 0.0, // Float
        Pcc: 0.0, // Float
        Z: 0.0, // Float
        B: 0.0, // Float
        F: 0.0, // Float
    },
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
        setWiretype: (state, action) => {
            state.Wiretype = action.payload;
        },
    },
});

export const { 
    setRatedpower, 
    setHV, 
    setLV, 
    setPo, 
    setPcc, 
    setZ, 
    setB, 
    setF,
    setWiretype, 
} = lvSlice.actions;

export default lvSlice.reducer;
