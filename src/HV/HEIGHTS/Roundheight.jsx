import React, {useEffect, useState } from 'react';
import HeightWire from '../../assets/heights/HeightWire.png';
import { setHV, selectHV } from './../../database/hvSlice';
import { selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Roundheight() {
  const dispatch = useDispatch();

  const [sliderValue, setSliderValue] = useState(1);
  const [factor, setfactor] = useState(1.025);
  const [Layers, setLayers] = useState(0);

  const Douter = useSelector((state) => selectHV(state, 'Douter'));
  const NumberOfWires = useSelector((state) => selectHV(state, 'NumberOfWires'));
  const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
  const Helechv = useSelector((state) => selectHV(state, 'Helechv'));
  const Hmechhv = useSelector((state) => selectHV(state, 'Hmechhv'));
  const Turnshv = useSelector((state) => selectHV(state, 'Turnshv'));
  const Layershv = useSelector((state) => selectHV(state, 'Layershv'));

  
  const tempLayerTurns = Heleclv / (Douter*NumberOfWires*factor);
  const maxValue = parseInt(tempLayerTurns)-1;

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setSliderValue(newValue);
  };

    useEffect(() => {
        const Helechv = sliderValue*NumberOfWires*Douter*factor;
        const Hmechhv = (sliderValue+1)*NumberOfWires*Douter*factor;
        dispatch(setHV({ key: 'Hmechhv', value: Hmechhv}));
        dispatch(setHV({ key: 'Helechv', value: Helechv}));
        const layers = Turnshv[0]/sliderValue;
        setLayers(layers);
        dispatch(setHV({ key: 'Layershv', value: Math.ceil(layers)}));
  }, [sliderValue,factor]);

  return (
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
  );
}

export default Roundheight;