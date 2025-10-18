import React, { useState , useEffect } from 'react';
import triplepackets from '../../assets/packets/3packets.png'


import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';
function Packets3() {
    const dispatch = useDispatch();

    const Firstpacketlv = useSelector((state) => selectLV(state, 'Firstpacketlv'));
    const Secondpacketlv = useSelector((state) => selectLV(state, 'Secondpacketlv'));
    const Thirdpacketlv = useSelector((state) => selectLV(state, 'Thirdpacketlv'));
    const [First,setFirst] = useState(true);
    const [Second,setSecond] = useState(true);
    
    const layout = useSelector((state) => selectLV(state, 'Layoutlv'));

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

    function Changefirst(){setFirst(prev => !prev);};
    function Changesecond(){setSecond(prev => !prev);};

    useEffect(() => {
          const duct1 = First ? "partial" : "decreased";
          const duct2 = Second ? "partial" : "decreased";
          const Packets = [{ duct1: "no", duct2: duct1, layers: Firstpacketlv },
            { duct1: duct1, duct2: duct2, layers: Secondpacketlv },
            { duct1: duct2, duct2: "partial", layers: Thirdpacketlv },
          ]
            dispatch(setLV({ key: 'Layoutlv', value: Packets }));
    }, [Firstpacketlv, Secondpacketlv,Thirdpacketlv,First,Second]); 

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
        <button onClick={() => Changefirst()}>first duct {First ? 'Partial' : 'Decreased'}</button>
        <button onClick={() => Changesecond()}>second duct {Second ? 'Partial' : 'Decreased'}</button>
      </div>
      <pre>{JSON.stringify(layout, null, 2)}</pre>

    </>
  );
}
export default Packets3;
