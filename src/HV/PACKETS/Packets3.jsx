import React from 'react';
import triplepackets from '../../assets/packets/3packets.png'
import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';

function Packets3() {
  const dispatch = useDispatch();

  dispatch(setHV({ key: 'Nocollingducthv', value: 2 }));

  
  function updatefirstpacket(value){
    dispatch(setHV({ key: 'Firstpacketlv', value: value }));
  }
  function updatesecondpacket(value){
    dispatch(setHV({ key: 'Secondpacketlv', value: value }));
  }
  function updatethirdpacket(value){
    dispatch(setHV({ key: 'Thirdpacketlv', value: value }));
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

        </div>
        <div>  <img src={triplepackets} alt='two packets'/></div>
      </div>
    </>
  );
}
export default Packets3;
