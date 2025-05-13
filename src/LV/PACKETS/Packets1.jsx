import React from 'react';
import doublepackets from '../../assets/packets/2packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';



function Packets1() {
    const dispatch = useDispatch();
    function updatefirstpacket(value){
        dispatch(setLV({ key: 'Firstpacketlv', value: value }));
    }
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
