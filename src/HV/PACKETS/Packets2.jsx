import React, { useState , useEffect } from 'react';
import doublepackets from '../../assets/packets/2packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';

function Packets2() {
      const dispatch = useDispatch();

      dispatch(setHV({ key: 'Nocollingducthv', value: 1 }));

      function updatefirstpacket(value){
          dispatch(setHV({ key: 'Firstpackethv', value: value }));
      };
      function updatesecondpacket(value){
        dispatch(setHV({ key: 'Secondpackethv', value: value }));
    };   

    const Firstpackethv = useSelector((state) => selectHV(state, 'Firstpackethv'));
    const Secondpackethv = useSelector((state) => selectHV(state, 'Secondpackethv'));

    useEffect(() => {
//code here for checking if the no of layers is correct

        }, [Firstpackethv, Secondpackethv]); 
  return (
    <>
      <div>No. of layers in each packet</div>

      <div>
        <div>
          <div>
            <label>1st packet</label>
            <input name="myInput" placeholder="layers" onChange={(e) => updatefirstpacket(parseFloat(e.target.value))} />
          </div>
          <div>
            <label>2nd packet</label>
            <input name="myInput" placeholder="layers" onChange={(e) => updatesecondpacket(parseFloat(e.target.value))}/>
          </div>
        </div>
        <div><img src={doublepackets} alt='two packets'/></div>
      </div>
    </>
  );
}
export default Packets2;

