import React, { useState } from 'react';
import HeightWire from '../../assets/heights/HeightWire.png';
import { setHV, selectHV } from './../../database/hvSlice';
import { selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Roundheight() {
  const dispatch = useDispatch();

  const [sliderValue, setSliderValue] = useState(1);
  const [factor, setfactor] = useState(1.025);

  const Douter = useSelector((state) => selectHV(state, 'Douter'));
  const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));

  const tempLayerTurns = Heleclv / (Douter*factor);
  const maxValue = parseInt(tempLayerTurns)-1;



  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setSliderValue(newValue);
    console.log('Slider moved to:', newValue);
    dispatch(setHV({ key: 'Hmech', value: newValue }));

    const Hmechhv = (newValue+1)*Douter*factor;
  };

  return (
    <>
      <div>
        <div>
          <label>Helec</label>
          <input type="range" min="1" max={maxValue} value={sliderValue} onChange={handleChange} style={{ width: '50%' }}/>
          <button onClick={() => setfactor(1.025)}>Factor 1.025</button>
          <button onClick={() => setfactor(1.035)}>Factor 1.035</button>

        {/* <h2>Hmech = {Hmechlv}</h2>
            <h2>Helec = {Heleclv}</h2> */}
        </div>
        <p>Current Value: {sliderValue}</p>
      </div>
        {/* <img src={HeightWire} alt="HeightWire.png is missing"/>
          <h3>no. of layers: {Layerslv}</h3> */}
    </>
  );
}

export default Roundheight;