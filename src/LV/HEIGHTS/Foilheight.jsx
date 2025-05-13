import React, { useEffect,useState } from 'react';

import HeightFoil from '../../assets/heights/HeightFoil.png'
import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Foilheight(){
  const dispatch = useDispatch();
  const Hmechlv = useSelector((state) => selectLV(state, 'Hmechlv'));
  const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
  const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
  const Nph = useSelector((state) => selectLV(state, 'Nph'));
  const Layerslv = useSelector((state) => selectLV(state, 'Layerslv'));

      dispatch(setLV({ key: 'Hmechlv', value: Wirelengthlv})); 
      dispatch(setLV({ key: 'Heleclv', value: Wirelengthlv}));
      dispatch(setLV({ key: 'Layerslv', value: Nph})); 
 
    return(
        <>
          <label>Hmech = Helec = {Heleclv}</label>
          <img
            src={HeightFoil}
            alt="HeightFoil.png is missing"
          />
          <h3>no. of layers:{Layerslv}</h3>
        </>
  )
}
export default Foilheight;