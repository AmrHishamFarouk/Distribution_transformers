import React, { useEffect,useState } from 'react';

import HeightWire from '../../assets/heights/HeightWire.jpeg'
import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Flatheight(){
const dispatch = useDispatch();

const Hmechlv = useSelector((state) => selectLV(state, 'Hmechlv'));
const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
const Nph = useSelector((state) => selectLV(state, 'Nph'));
const Layerslv = useSelector((state) => selectLV(state, 'Layerslv'));
const Turnlengthlv = useSelector((state) => selectLV(state, 'WirelengTurnlengthlvthlv'));
    

  function updateHmechlv(value){
    let NumWires = parseInt(value/ (Turnlengthlv*1.025));
    dispatch(setLV({ key: 'TurnsPerLayer', value: NumWires})); 

    dispatch(setLV({ key: 'Hmechlv', value: (NumWires*Turnlengthlv)})); 

    dispatch(setLV({ key: 'Heleclv', value: ((NumWires-1)*Turnlengthlv)}));
    let layers = Nph/(NumWires-1)
    dispatch(setLV({ key: 'Layerslv', value: Math.ceil(layers)})); 

  }    
    return(
        <>
          <div>
            <div>
              <label>Hmech</label>
              <input name="myInput" placeholder="mm" onChange={(e) => updateHmechlv(parseFloat(e.target.value))} />
            </div>
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
export default Flatheight;