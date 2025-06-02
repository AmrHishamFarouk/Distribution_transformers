import React, { useEffect,useState } from 'react';
import Packets2 from './PACKETS/Packets2';
import Packets3 from './PACKETS/Packets3';
import Packets4 from './PACKETS/Packets4';
import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';


function Lv2() {
    const dispatch = useDispatch();
  
  const δlv = useSelector((state) => selectLV(state, 'δlv'));
  const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));


  useEffect(() => {
      let MinLayersPerPacket = 100 / (Math.pow(δlv, 2) * Wirethicknesslv);
      let n = parseInt(MinLayersPerPacket);
      dispatch(setLV({ key: 'MinLayersPerPacketlv', value: n }));
  }, [δlv, Wirethicknesslv]);
        
      const n = useSelector((state) => selectLV(state, 'MinLayersPerPacketlv'));
      const Nph = useSelector((state) => selectLV(state, 'Nph'));

      useEffect(() => {
        let packets = Math.ceil(Nph/n);
        dispatch(setLV({ key: 'Minpacketslv', value: packets }));
    }, [Nph, n]);
          
    const Minpacketslv = useSelector((state) => selectLV(state, 'Minpacketslv'));

        
  const [Nopack, setNopack] = useState(1);
  
  useEffect(() => {
    setNopack(Minpacketslv); // Sync when Minpacketslv updates
  }, [Minpacketslv]);

  let Changepack = (sign) => {
    setNopack(prevNopack => {
      if (sign === '+' && prevNopack < 4) return prevNopack + 1;
      if (sign === '-' && prevNopack > Minpacketslv) return prevNopack - 1;
      return prevNopack; // Keep the same value if conditions are not met
    });
    console.log("Current Nopack:", Nopack);

  };
  
  return (
    <>
      <div> n= {n.toFixed(2)}</div>
      {Nopack == 2 && <Packets2 />}
      {Nopack == 3 && <Packets3 />}
      {Nopack == 4 && <Packets4 />}
      <div>
        <button onClick={() => Changepack('+')}> increase insulation </button>
        <button onClick={() => Changepack('-')}> decrease insulation </button>
      </div>
    </>
  );
}
export default Lv2;
