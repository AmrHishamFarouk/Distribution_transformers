import React, { useState , useEffect } from 'react';
import doublepackets from '../../assets/packets/2packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';



function Packets1() {
    const dispatch = useDispatch();
    dispatch(setHV({ key: 'Nocollingducthv', value: 0 }));
    
    function updatefirstpacket(value){
        dispatch(setHV({ key: 'Firstpackethv', value: value }));
    }

    const Firstpackethv = useSelector((state) => selectHV(state, 'Firstpackethv'));

    useEffect(() => {
//code here for checking if the no of layers is correct

        }, [Firstpackethv]); 

  return (
    <>
      <div>No. of layers</div>

      <div>
        <div>
          <div>
            <label>1st packet</label>
            <input name="myInput" placeholder="layers" onChange={(e) => updatefirstpacket(parseFloat(e.target.value))}/>
          </div>
        </div>
        <div><img src={doublepackets} alt='one packet'/></div>
      </div>
    </>
  );
}
export default Packets1;
