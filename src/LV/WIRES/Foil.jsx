import React, { useEffect,useState } from 'react';
import foilwire from "../../assets/wires/foil_csa.png";

import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';
function Foil() {
  const dispatch = useDispatch();

    function updateThickness(value){
      dispatch(setLV({ key: 'Wirethicknesslv', value: value}));
      dispatch(setLV({ key: 'Turnthicknesslv', value: value}));
    };
    function updateLength(value){
      dispatch(setLV({ key: 'Wirelengthlv', value: value}));
      dispatch(setLV({ key: 'Turnlengthlv', value: value}));
    }

    function updateR(value){
      dispatch(setLV({ key: 'WireR', value: value}));
    }

    const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
    const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
    const WireR = useSelector((state) => selectLV(state, 'WireR'));

        useEffect(() => {
          let csa = (Wirelengthlv * Wirethicknesslv) - ((Math.pow(WireR, 2))*(4-(22/7)));
          dispatch(setLV({ key: 'Csalv', value: csa}));
        }, [Wirethicknesslv, Wirelengthlv, WireR]);
        
  const Csalv = useSelector((state) => selectLV(state, 'Csalv'));

  return (
    <>
      <div>
        <h2>Foil</h2>
        <img scr=".assets/Foil.png" />
      </div>

      <div>
        <div>
          <div>
            <div>
              <label>Length</label>
              <input name="myInput" placeholder="Length" onChange={(e) => updateLength(parseFloat(e.target.value))}/>
            </div>
            <div>
              <label>Thickness</label>
              <input name="myInput" placeholder="Thickness" onChange={(e) => updateThickness(parseFloat(e.target.value))}/>
            </div>
            <div>
              <label>r</label>
              <input name="myInput" placeholder="r" onChange={(e) => updateR(parseFloat(e.target.value))}/>
            </div>
          </div>

          <div>
            C.S.A = {Csalv.toFixed(4)}
          </div>
        </div>

        <img src={foilwire} alt="foil CSA imgage missed" />
      </div>
    </>
  );
}

export default Foil;
