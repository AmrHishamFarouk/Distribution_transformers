import React, { useState , useEffect } from 'react';
import doublepackets from '../../assets/packets/2packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';

function Packets2() {
    const dispatch = useDispatch();

    const [Partial,setPartial] = useState(true);
    const Firstpacketlv = useSelector((state) => selectLV(state, 'Firstpacketlv'));
    const Secondpacketlv = useSelector((state) => selectLV(state, 'Secondpacketlv'));

        const layout = useSelector((state) => selectLV(state, 'Layoutlv'));
    
      dispatch(setLV({ key: 'Nocollingductlv', value: 1 }));

      function ChangePartial(){
        setPartial(prev => !prev);
      };
      
      function updatefirstpacket(value){
          dispatch(setLV({ key: 'Firstpacketlv', value: value }));
      };
      function updatesecondpacket(value){
        dispatch(setLV({ key: 'Secondpacketlv', value: value }));
    };   

    useEffect(() => {
      const duct = Partial ? "partial" : "decreased";
      const Packets = [{ duct1: "no", duct2: duct, layers: Firstpacketlv },
        { duct1: duct, duct2: "partial", layers: Secondpacketlv }
      ]
        dispatch(setLV({ key: 'Layoutlv', value: Packets }));
    }, [Firstpacketlv, Secondpacketlv,Partial]); 

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
        <button onClick={() => ChangePartial()}>{Partial ? 'Partial' : 'Decreased'}</button>
      </div>
      <pre>{JSON.stringify(layout, null, 2)}</pre>

    </>
  );
}
export default Packets2;
