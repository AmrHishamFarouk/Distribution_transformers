import React, {useEffect, useState } from 'react';
import HeightWire from '../../assets/heights/HeightWire.png';
import { setHV, selectHV } from './../../database/hvSlice';
import { selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Flatheight(){
  const dispatch = useDispatch();

  const [sliderValue, setSliderValue] = useState(1);
  const [factor, setfactor] = useState(1.025);
  const [maxValue, setmaxValue] = useState(401);
  const [Layers, setLayers] = useState(0);

  const Douter = useSelector((state) => selectHV(state, 'Douter'));
  const NumberOfWires = useSelector((state) => selectHV(state, 'NumberOfWires'));
  const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
  const Helechv = useSelector((state) => selectHV(state, 'Helechv'));
  const Hmechhv = useSelector((state) => selectHV(state, 'Hmechhv'));
  const Turnshv = useSelector((state) => selectHV(state, 'Turnshv'));
  const Layershv = useSelector((state) => selectHV(state, 'Layershv'));
  const Wirealignment = useSelector((state) => selectHV(state, 'Wirealignmenthv'));
  const Wirelength = useSelector((state) => selectHV(state, 'Wirelengthhv'));
  const WireInsulation = useSelector((state) => selectHV(state, 'WireInsulation'));

      useEffect(() => {
  if(Wirealignment == 'vertically'){
    const tempLayerTurns = Heleclv / ((Wirelength+WireInsulation)*NumberOfWires*factor);
    setmaxValue(parseInt(tempLayerTurns)-1);
  }
  else if(Wirealignment == 'horizontally'){
    const tempLayerTurns = Heleclv / ((Wirelength+WireInsulation)*factor);
    setmaxValue(parseInt(tempLayerTurns)-1);
  };
  }, [Heleclv]);


  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setSliderValue(newValue);
  };

    useEffect(() => {
      if(Wirealignment == 'vertically'){
        const Helechv = sliderValue*NumberOfWires*(Wirelength+WireInsulation)*factor;
        dispatch(setHV({ key: 'Helechv', value: Helechv}));
        const Hmechhv = Helechv+((Wirelength+WireInsulation)*factor);
        dispatch(setHV({ key: 'Hmechhv', value: Hmechhv}));
        const layers = Turnshv[0]/sliderValue;
        setLayers(layers);
        dispatch(setHV({ key: 'Layershv', value: Math.ceil(layers)}));
      }
      else if(Wirealignment == 'horizontally'){
        const Helechv = sliderValue*(Wirelength+WireInsulation)*factor;
        dispatch(setHV({ key: 'Helechv', value: Helechv}));
        const Hmechhv = Helechv+((Wirelength+WireInsulation)*factor);
        dispatch(setHV({ key: 'Hmechhv', value: Hmechhv}));
        const layers = Turnshv[0]/sliderValue;
        setLayers(layers);
        dispatch(setHV({ key: 'Layershv', value: Math.ceil(layers)}));
      };
  }, [sliderValue,factor]);

    return(
        <>
        <div>
          <div>
            <label>Helec</label>
            <input type="range" min={maxValue-30} max={maxValue} value={sliderValue} onChange={handleChange} style={{ width: '50%' }}/>
            <button onClick={() => setfactor(1.025)}>Factor 1.025</button>
            <button onClick={() => setfactor(1.035)}>Factor 1.035</button>

          <h2>Hmechhv = {Hmechhv.toFixed(1)}</h2>
              <h2>Helechv = {Helechv.toFixed(1)}</h2>
              <h2>Heleclv = {Heleclv.toFixed(1)}</h2>
          </div>
          <p>turns per layer: {sliderValue}</p>
        </div>
          <img src={HeightWire} alt="HeightWire.png is missing"/>
          <h3>no. of layers: {Layers.toFixed(2)}</h3>
          <h3>used layers: {Layershv.toFixed(2)}</h3>
      </>
  )
}
export default Flatheight;