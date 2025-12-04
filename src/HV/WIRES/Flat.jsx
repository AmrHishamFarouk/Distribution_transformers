import React, { useEffect,useState } from 'react';
import flatwire1 from "../../assets/wires/flat_csa.png";
import flatwire2horizontally from "../../assets/wires/2wires_horizontal_flat.png";
import flatwire3horizontally from "../../assets/wires/3wires_horizontal_flat.png";
import flatwire2vertically from "../../assets/wires/2wires_vertical_flat.png";
import flatwire3vertically from "../../assets/wires/3wires_vertical_flat.png";

import { setHV, selectHV } from './../../database/hvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Flat() {
  const dispatch = useDispatch();

    function updatenumber(value){
      dispatch(setHV({ key: 'NumberOfWires', value: value}));
    };
    function updateThickness(value){
      dispatch(setHV({ key: 'Wirethicknesshv', value: value}));
    };
    function updateLength(value){
      dispatch(setHV({ key: 'Wirelengthhv', value: value}));
    }
    function updateInsulation(value){
      dispatch(setHV({ key: 'WireInsulation', value: value}));
    }
    function updateR(value){
      dispatch(setHV({ key: 'WireR', value: value}));
    }

    const Wirethicknesshv = useSelector((state) => selectHV(state, 'Wirethicknesshv'));
    const Wirelengthhv = useSelector((state) => selectHV(state, 'Wirelengthhv'));
    const WireR = useSelector((state) => selectHV(state, 'WireR'));
    const NumberOfWires = useSelector((state) => selectHV(state, 'NumberOfWires'));

        useEffect(() => {
          let csa = ((Wirelengthhv * Wirethicknesshv) - ((WireR^2)*(4-(22/7))))*NumberOfWires;
          dispatch(setHV({ key: 'Csahv', value: csa.toFixed(3)}));
        }, [Wirethicknesshv, Wirelengthhv, WireR,NumberOfWires]);
        
    const Csahv = useSelector((state) => selectHV(state, 'Csahv'));
    const Wirealignment = useSelector((state) => selectHV(state, 'Wirealignmenthv'));

    function alignWire(value){
      dispatch(setHV({ key: 'Wirealignmenthv', value: value}));
    }

const [wirepicture, setwirepicture] = useState(flatwire1);

useEffect(() => {
  switch (`${Wirealignment}_${NumberOfWires}`) {
    case 'vertically_2':
      setwirepicture(flatwire2vertically);
      break;
    case 'vertically_3':
      setwirepicture(flatwire3vertically);
      break;
    case 'horizontally_2':
      setwirepicture(flatwire2horizontally);
      break;
    case 'horizontally_3':
      setwirepicture(flatwire3horizontally);
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

          <div> ∆c.s.a = {Csahv}</div>
        </div>

        <img src={wirepicture} alt="flat CSA imgage missed" />
      </div>
    </>
  );
}

export default Flat;
