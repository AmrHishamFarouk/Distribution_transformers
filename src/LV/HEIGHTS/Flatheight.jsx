import React, { useEffect,useState } from 'react';

import HeightWire from '../../assets/heights/HeightWire.jpeg'
import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Flatheight(){
  const dispatch = useDispatch();

  const Douter = useSelector((state) => selectLV(state, 'Douter'));
  const NumberOfWires = useSelector((state) => selectLV(state, 'NumberOfWires'));
  const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
  const Hmechlv = useSelector((state) => selectLV(state, 'Hmechlv'));
  const Nph = useSelector((state) => selectLV(state, 'Nph'));
  const Layerslv = useSelector((state) => selectLV(state, 'Layerslv'));
  const Wirealignment = useSelector((state) => selectLV(state, 'Wirealignmentlv'));
  const Wirelength = useSelector((state) => selectLV(state, 'Wirelengthlv'));
  const WireInsulation = useSelector((state) => selectLV(state, 'WireInsulation'));
  const Turnlengthlv = useSelector((state) => selectLV(state, 'Turnlengthlv'));
  const Turnthicknesslv = useSelector((state) => selectLV(state, 'Turnthicknesslv'));

  const [sliderValue, setSliderValue] = useState(1);
  const [factor, setfactor] = useState(1.025);
  const [maxValue, setmaxValue] = useState(Nph);
  const [Layers, setLayers] = useState(0);

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setSliderValue(newValue);
  };

    useEffect(() => {
      if(Wirealignment == 'vertically'){
        const Heleclv = sliderValue*NumberOfWires*(Wirelength+WireInsulation)*factor;
        dispatch(setLV({ key: 'Heleclv', value: Heleclv}));
        const Hmechlv = Heleclv+(NumberOfWires*(Wirelength+WireInsulation)*factor);
        dispatch(setLV({ key: 'Hmechlv', value: Hmechlv}));
        const layers = Nph/sliderValue;
        setLayers(layers);
        dispatch(setLV({ key: 'Layerslv', value: Math.ceil(layers)}));
      }
      else if(Wirealignment == 'horizontally'){
        const Heleclv = sliderValue*(Wirelength+WireInsulation)*factor;
        dispatch(setLV({ key: 'Heleclv', value: Heleclv}));
        const Hmechlv = Heleclv+((Wirelength+WireInsulation)*factor);
        dispatch(setLV({ key: 'Hmechlv', value: Hmechlv}));
        const layers = Nph/sliderValue;
        setLayers(layers);
        dispatch(setLV({ key: 'Layerslv', value: Math.ceil(layers)}));
      };
  }, [sliderValue,factor]);

  
    return(
        <>
        <div>
          <div>
            <label>Helec</label>
            <input type="range" min='0' max={maxValue} value={sliderValue} onChange={handleChange} style={{ width: '50%' }}/>
            <button onClick={() => setfactor(1.025)}>Factor 1.025</button>
            <button onClick={() => setfactor(1.035)}>Factor 1.035</button>
              <h2>Hmechlv = {Hmechlv.toFixed(1)}</h2>
              <h2>Heleclv = {Heleclv.toFixed(1)}</h2>
          </div>
          <p>turns per layer: {sliderValue}</p>
        </div>
          <img src={HeightWire} alt="HeightWire.png is missing"/>
          <h3>no. of layers: {Layers.toFixed(2)}</h3>
          <h3>used layers: {Layerslv.toFixed(2)}</h3>
          <label>--BORAGET--</label>
          <h3>BORAGET VALUEEEEEEEEEEEEEEEEE</h3>

      </>
  )
}
export default Flatheight;