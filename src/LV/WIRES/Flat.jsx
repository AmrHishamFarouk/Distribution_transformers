import React from 'react';
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

  
    // const CSA = useSelector((state) => selectLV(state, 'Csalv'));
    // const Length = useSelector((state) => selectLV(state, 'Csalv'));
    // const Thickness = useSelector((state) => selectLV(state, 'Csalv'));
    // const r = useSelector((state) => selectLV(state, 'Csalv'));
    // const NumberOfWires = useSelector((state) => selectLV(state, 'Csalv'));

    // ({Length} x {Thickness} - {r}^2 x(4-𝜋))*number of wires


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
              <input name="myInput"  onChange={(e) => updatenumber(parseInt(e.target.value))} />
            </div>
          </div>
          </div>
          <div>
             ∆c.s.a =  
          </div>
        </div>

        <img src={flatwire} alt="flat CSA imgage missed" />
      </div>
    </>
  );
}

export default Flat;
