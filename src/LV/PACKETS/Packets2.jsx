import React from 'react';
import doublepackets from '../../assets/packets/2packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';

function Packets2() {
      const dispatch = useDispatch();
      function updatefirstpacket(value){
          dispatch(setLV({ key: 'Firstpacketlv', value: value }));
      };
      function updatesecondpacket(value){
        dispatch(setLV({ key: 'Secondpacketlv', value: value }));
    };   

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
            <input name="myInput" placeholder="layers" onChange={(e) => updatesecondpacket(parseFloat(e.target.value))}/>
          </div>
        </div>
        <div><img src={doublepackets} alt='two packets'/></div>
      </div>
    </>
  );
}
export default Packets2;
