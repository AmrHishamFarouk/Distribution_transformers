import React, { useEffect,useState } from 'react';
import flatwire1 from "../../assets/wires/flat_csa.png";
import flatwire2horizontally from "../../assets/wires/2wires_horizontal_flat.png";
import flatwire3horizontally from "../../assets/wires/3wires_horizontal_flat.png";
import flatwire2vertically from "../../assets/wires/2wires_vertical_flat.png";
import flatwire3vertically from "../../assets/wires/3wires_vertical_flat.png";

import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Flat() {
  const dispatch = useDispatch();

    const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
    const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
    const WireR = useSelector((state) => selectLV(state, 'WireR'));
    const NumberOfWires = useSelector((state) => selectLV(state, 'NumberOfWires'));
    const Csalv = useSelector((state) => selectLV(state, 'Csalv'));
    const Wirealignment = useSelector((state) => selectLV(state, 'Wirealignmentlv'));

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

        useEffect(() => {
          let csa = ((Wirelengthlv * Wirethicknesslv) - ((WireR^2)*(4-(22/7))))*NumberOfWires;
          dispatch(setLV({ key: 'Csalv', value: csa}));
        }, [Wirethicknesslv, Wirelengthlv, WireR,NumberOfWires]);


    function alignWire(value){
      dispatch(setLV({ key: 'Wirealignmentlv', value: value}));
    }

const [wirepicture, setwirepicture] = useState(flatwire1);

useEffect(() => {
  switch (`${Wirealignment}_${NumberOfWires}`) {
    case 'vertically_2':
      setwirepicture(flatwire2vertically);
      dispatch(setLV({ key: 'Turnlengthlv', value: Wirelengthlv*NumberOfWires}));
      dispatch(setLV({ key: 'Turnthicknesslv', value: Wirethicknesslv}));
      break;
    case 'vertically_3':
      setwirepicture(flatwire3vertically);
      dispatch(setLV({ key: 'Turnlengthlv', value: Wirelengthlv*NumberOfWires}));
      dispatch(setLV({ key: 'Turnthicknesslv', value: Wirethicknesslv}));
      break;
    case 'horizontally_2':
      setwirepicture(flatwire2horizontally);
      dispatch(setLV({ key: 'Turnlengthlv', value: Wirelengthlv}));
      dispatch(setLV({ key: 'Turnthicknesslv', value: Wirethicknesslv*NumberOfWires}));
      break;
    case 'horizontally_3':
      setwirepicture(flatwire3horizontally);
      dispatch(setLV({ key: 'Turnlengthlv', value: Wirelengthlv}));
      dispatch(setLV({ key: 'Turnthicknesslv', value: Wirethicknesslv*NumberOfWires}));
      break;
    default:
      setwirepicture(flatwire1);
  }
}, [Wirealignment, NumberOfWires]);


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
            <button onClick={() => alignWire('vertically')}>Aligned vertically</button>
            <button onClick={() => alignWire('horizontally')}>Aligned horizontally</button>
          </div>
          </div>

          <div> ∆c.s.a = {Csalv.toFixed(4)}</div>
        </div>

        <img src={wirepicture} alt="flat CSA imgage missed" />
      </div>
    </>
  );
}

export default Flat;