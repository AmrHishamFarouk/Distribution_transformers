import React, { useEffect,useState } from 'react';
import foilwire from "../../assets/wires/foil_csa.png";
import './../../CSS/Wires/Foil.css';
import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';
function Foil() {
  const dispatch = useDispatch();

  const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
  const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
  const WireR = useSelector((state) => selectLV(state, 'WireR'));
  const Csalv = useSelector((state) => selectLV(state, 'Csalv'));

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
    useEffect(() => {
          let csa = (Wirelengthlv * Wirethicknesslv) - ((Math.pow(WireR, 2))*(4-(22/7)));
          dispatch(setLV({ key: 'Csalv', value: csa.toFixed(3)}));
    }, [Wirethicknesslv, Wirelengthlv, WireR]);
        
  return (
      <div className='parent'>
          <div className='div1'>
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
              <input name="myInput" placeholder="r" value='0.5' onChange={(e) => updateR(parseFloat(e.target.value))}/>
            </div>
          </div>
          <div className='div2'>
            C.S.A = {Csalv}
          </div>
            <img src={foilwire} className='div3' alt="foil CSA imgage missed" />
      </div>
  );
}

export default Foil;
