import React, { useEffect,useState } from 'react';
import HeightWire from '../../assets/heights/HeightWire.png'
import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Roundheight(){
const dispatch = useDispatch();

const Hmechlv = useSelector((state) => selectLV(state, 'Hmechlv'));
const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
const Nph = useSelector((state) => selectLV(state, 'Nph'));
const Layerslv = useSelector((state) => selectLV(state, 'Layerslv'));
const Douter = useSelector((state) => selectLV(state, 'Douter'));
useEffect(() => {
  console.log('State Values:', { Hmechlv, Heleclv, Nph, Layerslv, Douter });
}, [Hmechlv, Heleclv, Nph, Layerslv, Douter]);

function updateHmechlv(value) {
  console.log('updateHmechlv called with value:', value);
  console.log('Current Douter:', Douter);
  console.log('Current Nph:', Nph);

  let NumWires = parseInt(value / Douter);
  console.log('Computed NumWires:', NumWires);

  dispatch(setLV({ key: 'TurnsPerLayer', value: NumWires }));
  dispatch(setLV({ key: 'Hmechlv', value: NumWires * Douter }));
  dispatch(setLV({ key: 'Heleclv', value: (NumWires - 1) * Douter }));

  let layers = Nph / (NumWires - 1);
  console.log('Computed Layers:', layers);

  dispatch(setLV({ key: 'Layerslv', value: Math.ceil(layers) }));
}


    return(
          <>
          <div>
            <div>
              <label>Hmech</label>
<input name="myInput" placeholder="mm" onChange={(e) => {
  console.log('Input changed:', e.target.value);
  updateHmechlv(parseFloat(e.target.value));
}} />            </div>
            <h2>Hmech = {Hmechlv}</h2>
            <h2>Helec = {Heleclv}</h2>
          </div>
          <img
            src={HeightWire}
            alt="HeightWire.png is missing"
          />
          <h3>no. of layers: {Layerslv}</h3>

        </>
  )
}
export default Roundheight;