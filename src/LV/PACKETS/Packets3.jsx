import React, { useState , useEffect } from 'react';
import triplepackets from '../../assets/packets/3packets.png'


import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';
function Packets3() {
        const dispatch = useDispatch();

        dispatch(setLV({ key: 'Nocollingductlv', value: 2 }));

        function updatefirstpacket(value){
            dispatch(setLV({ key: 'Firstpacketlv', value: value }));
        }
        function updatesecondpacket(value){
          dispatch(setLV({ key: 'Secondpacketlv', value: value }));
      }
      function updatethirdpacket(value){
        dispatch(setLV({ key: 'Thirdpacketlv', value: value }));
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
      <div>No. of layers in each packet</div>

      <div>
        <div>
          <div>
            <label>1st packet</label>
            <input name="myInput" placeholder="layers" onChange={(e) => updatefirstpacket(parseFloat(e.target.value))} />
          </div>
          <div>
            <label>2nd packet</label>
            <input name="myInput" placeholder="layers" onChange={(e) => updatesecondpacket(parseFloat(e.target.value))} />
          </div>
          <div>
            <label>3rd packet</label>
            <input name="myInput" placeholder="layers" onChange={(e) => updatethirdpacket(parseFloat(e.target.value))} />
          </div>
        </div>
        <div>  <img src={triplepackets} alt='two packets'/></div>
      </div>
    </>
  );
}
export default Packets3;
