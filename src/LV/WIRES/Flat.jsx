import React, { useEffect,useState } from 'react';
import flatwire from "../../assets/wires/flat_csa.png"

import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Flat() {
  const dispatch = useDispatch();

    function updatenumber(value){
      dispatch(setLV({ key: 'NumberOfWires', value: value}));
    };
    function updateThickness(value){
      dispatch(setLV({ key: 'Wirethicknesslv', value: value}));
    };
    function updateLength(value){
      dispatch(setLV({ key: 'Wirelengthlv', value: value}));
    }
    function updateInsulation(value){
      dispatch(setLV({ key: 'WireInsulation', value: value}));
    }
    function updateR(value){
      dispatch(setLV({ key: 'WireR', value: value}));
    }

    const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
    const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
    const WireR = useSelector((state) => selectLV(state, 'WireR'));
    const NumberOfWires = useSelector((state) => selectLV(state, 'NumberOfWires'));

        useEffect(() => {
          let csa = ((Wirelengthlv * Wirethicknesslv) - ((WireR^2)*(4-(22/7))))*NumberOfWires;
          dispatch(setLV({ key: 'Csalv', value: csa}));
        }, [Wirethicknesslv, Wirelengthlv, WireR,NumberOfWires]);
        
  const Csalv = useSelector((state) => selectLV(state, 'Csalv'));

  return (
    <>
      <div>
        <h2>Flat</h2>
        <img scr=".assets/Flat.png" />
      </div>

      <div>
        
        <div>
          <div>
          <div>
            <div>
              <label>Length</label>
              <input name="myInput" placeholder="Length" onChange={(e) => updateLength(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>Thickness</label>
              <input name="myInput" placeholder="Thickness" onChange={(e) => updateThickness(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>Insulation</label>
              <input name="myInput" placeholder="insulations" defaultValue= '0.5' onChange={(e) => updateInsulation(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>r</label>
              <input name="myInput" placeholder="r" defaultValue= '0.5' onChange={(e) => updateR(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>Number of wires</label>
              <input name="myInput"  defaultValue= '1' onChange={(e) => updatenumber(parseInt(e.target.value))} />
            </div>
          </div>
          </div>

          <div> ∆c.s.a = {Csalv.toFixed(4)}</div>
        </div>

        <img src={flatwire} alt="flat CSA imgage missed" />
      </div>
    </>
  );
}

export default Flat;
