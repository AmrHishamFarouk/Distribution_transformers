import React from 'react';
import quadrapackets from '../../assets/packets/4packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';
function Packets4() {
          const dispatch = useDispatch();
          function updatefirstpacket(value){
              dispatch(setLV({ key: 'Firstpacketlv', value: value }));
          }
          function updatesecondpacket(value){
            dispatch(setLV({ key: 'Secondpacketlv', value: value }));
        }
        function updatethirdpacket(value){
          dispatch(setLV({ key: 'Thirdpacketlv', value: value }));
      }    
      function updatefourthpacket(value){
        dispatch(setLV({ key: 'Fourthpacketlv', value: value }));
    }      
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
