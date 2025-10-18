import React, { useState , useEffect } from 'react';
import quadrapackets from '../../assets/packets/4packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';
function Packets4() {
    const dispatch = useDispatch();
    const Firstpacketlv = useSelector((state) => selectLV(state, 'Firstpacketlv'));
    const Secondpacketlv = useSelector((state) => selectLV(state, 'Secondpacketlv'));
    const Thirdpacketlv = useSelector((state) => selectLV(state, 'Thirdpacketlv'));
    const Fourthpacketlv = useSelector((state) => selectLV(state, 'Fourthpacketlv'));
    const [First,setFirst] = useState(true);
    const [Second,setSecond] = useState(true);
    const [Third,setThird] = useState(true);

    const layout = useSelector((state) => selectLV(state, 'Layoutlv'));

    dispatch(setLV({ key: 'Nocollingductlv', value: 3 }));

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
    
    function Changefirst(){setFirst(prev => !prev);};
    function Changesecond(){setSecond(prev => !prev);};
    function Changethird(){setThird(prev => !prev);};

    useEffect(() => {
      const duct1 = First ? "partial" : "decreased";
      const duct2 = Second ? "partial" : "decreased";
      const duct3 = Third ? "partial" : "decreased";
      const Packets = [
        { duct1: "no", duct2: duct1, layers: Firstpacketlv },
        { duct1: duct1, duct2: duct2, layers: Secondpacketlv },
        { duct1: duct2, duct2: duct3, layers: Thirdpacketlv },
        { duct1: duct3, duct2: "partial", layers: Fourthpacketlv },
        ]
        dispatch(setLV({ key: 'Layoutlv', value: Packets }));
    },[Firstpacketlv, Secondpacketlv,Thirdpacketlv,Fourthpacketlv,First,Second,Third]); 

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
        <img src={quadrapackets} alt='four packets'/>
        <button onClick={() => Changefirst()}>first duct {First ? 'Partial' : 'Decreased'}</button>
        <button onClick={() => Changesecond()}>second duct {Second ? 'Partial' : 'Decreased'}</button>
        <button onClick={() => Changethird()}>third duct {Third ? 'Partial' : 'Decreased'}</button>
      </div>
     <pre>{JSON.stringify(layout, null, 2)}</pre>

    </>
  );
}
export default Packets4;
