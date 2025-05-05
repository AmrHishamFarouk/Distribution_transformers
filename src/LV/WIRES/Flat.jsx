import React from 'react';
import flatwire from "../../assets/wires/flat_csa.png"

import { setLV, selectLV } from './../../database/lvSlice';

  Wirethicknesslv
  Csalv
  Turnlengthlv
  Turnthicknesslv
  NumberOfWires
  WireInsulation
function Flat() {
  const dispatch = useDispatch();

    // function updateLength(value){
    //   dispatch(setLV({ key: 'Wirethicknesslv', value: value}))
    // };

    function updatenumber(value){
      dispatch(setLV({ key: 'NumberOfWires', value: value}))
    };
    function updateThickness(value){
      dispatch(setLV({ key: 'Wirethicknesslv', value: value}))
    };
    function updateLength(value){
      dispatch(setLV({ key: 'Wirelengthlv', value: value}))
    }

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
              <label>Length</label>
              <input name="myInput" placeholder="Length" onChange={(e) => updateLength(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>Thickness</label>
              <input name="myInput" placeholder="Thickness" onChange={(e) => updateThickness(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>Insulation</label>
              <input name="myInput" placeholder="insulations" defaultValue= '0.0' onChange={(e) => updateThickness(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>r</label>
              <input name="myInput" placeholder="r" defaultValue= '0.5' onChange={(e) => updateThickness(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>Number of wires</label>
              <input name="myInput"  onChange={(e) => updatenumber(parseInt(e.target.value))} />
            </div>
          </div>

          <div>
            {/* ∆c.s.a = ({Length} x {Thickness} - {r}^2 x(4-𝜋))*number of wires */}
          </div>
        </div>

        <img src={flatwire} alt="flat CSA imgage missed" />
      </div>
    </>
  );
}

export default Flat;
