import React, { useState , useEffect } from 'react';
import doublepackets from '../../assets/packets/1packets.jpeg'

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';



function Packets1() {
    const dispatch = useDispatch();

    dispatch(setLV({ key: 'Nocollingductlv', value: 0 }));

    function updatefirstpacket(value){
        dispatch(setLV({ key: 'Firstpacketlv', value: value }));
    }

    const Firstpacketlv = useSelector((state) => selectLV(state, 'Firstpacketlv'));
    const Secondpacketlv = useSelector((state) => selectLV(state, 'Secondpacketlv'));
    const Thirdpacketlv = useSelector((state) => selectLV(state, 'Thirdpacketlv'));
    const Fourthpacketlv = useSelector((state) => selectLV(state, 'Fourthpacketlv'));
    useEffect(() => {
//code here for checking if the no of layers is correct

        }, [Firstpacketlv, Secondpacketlv,Thirdpacketlv,Fourthpacketlv]); 

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
