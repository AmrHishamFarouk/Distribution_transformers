import React, { useState , useEffect } from 'react';
import quadrapackets from '../../assets/packets/4packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';

function Packets4() {
          const dispatch = useDispatch();

          dispatch(setHV({ key: 'Nocollingductlv', value: 3 }));

          function updatefirstpacket(value){
              dispatch(setHV({ key: 'Firstpacketlv', value: value }));
          }
          function updatesecondpacket(value){
            dispatch(setHV({ key: 'Secondpacketlv', value: value }));
        }
        function updatethirdpacket(value){
          dispatch(setHV({ key: 'Thirdpacketlv', value: value }));
      }    
      function updatefourthpacket(value){
        dispatch(setHV({ key: 'Fourthpacketlv', value: value }));
    }     
    
    const Firstpackethv = useSelector((state) => selectHV(state, 'Firstpackethv'));
    const Secondpackethv = useSelector((state) => selectHV(state, 'Secondpackethv'));
    const Thirdpackethv = useSelector((state) => selectHV(state, 'Thirdpackethv'));
    const Fourthpackethv = useSelector((state) => selectHV(state, 'Fourthpackethv'));
    useEffect(() => {
//code here for checking if the no of layers is correct
        }, [Firstpackethv, Secondpackethv,Thirdpackethv,Fourthpackethv]); 

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
          <div>
            <label>4th packet</label>
            <input name="myInput" placeholder="layers" onChange={(e) => updatefourthpacket(parseFloat(e.target.value))}/>
          </div>
        </div>
        <div><img src={quadrapackets} alt='four packets'/></div>
      </div>
    </>
  );
}
export default Packets4;
